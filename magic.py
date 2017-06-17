#!/usr/bin/python
import os
import sys
import re
from BeautifulSoup import BeautifulSoup
import sqlite3, csv
import urllib
import hashlib
import time

# This program will first download a list of stocks from the TSX. Then, for
# each stock, it grabs company information, including company name and
# quarterly EPS and revenue data, and adds it to an SQLITE database.

# All web pages downloaded are stored in a folder called "cache", so they will
# never need to be downloaded again. To get fresh data from the web, you will
# have to delete the cache folder.

# Here is the schema for the SQL database. Note that dates are recorded as the
# number of seconds since January 1, 1970
SCHEMA = """
CREATE TABLE COMPANIES (
	symbol TEXT,
	name TEXT,
	sector TEXT,
	industry TEXT
);

CREATE TABLE FINANCIALS (
	symbol TEXT,
	date DATE,
	price INTEGER,
	marcap INTEGER,
	pe DECIMAL(1,2)
);

CREATE TABLE MAGIC_COMPANIES (
	symbol TEXT,
	marcap INTEGER,
	priceDate DATE,
	quarterDate DATE,
	capFilter INTEGER,
	rank INTEGER
);
"""

DATABASE_NAME = "magic.db"
CACHE_FOLDER = "cache"

class Database:
	def __init__(self):
		create = not os.path.exists( DATABASE_NAME )
		self.conn = sqlite3.connect( DATABASE_NAME, timeout=99.0 )
		if create:
			c = self.conn.cursor()
			c.executescript( SCHEMA )
	
	def getSectors(self):
		c = self.conn.cursor()
		c.execute("SELECT DISTINCT sector FROM COMPANIES")
		return c.fetchall();

	def getCapFilters(self):
		c = self.conn.cursor()
		c.execute("SELECT DISTINCT capFilter FROM MAGIC_COMPANIES")
		return c.fetchall();

	def getCompanySector(self, symbol):
		#print "Method: getCompanySector"
		c = self.conn.cursor()
		c.execute("SELECT sector FROM COMPANIES WHERE symbol=?", (symbol,))
		sector = c.fetchone();
		if sector is None:
			return "Unknown"
		else:
			return sector[0]

	def getLatestPriceDate(self):
		c = self.conn.cursor()
		c.execute("SELECT distinct priceDate from MAGIC_COMPANIES ORDER BY priceDate DESC LIMIT 1")
		return c.fetchone()[0];

	def getRankedByCapFilter(self, capFilter):
		priceDate =  self.getLatestPriceDate()
		c = self.conn.cursor()
		#c.execute("SELECT symbol FROM MAGIC_COMPANIES WHERE capFilter=? AND priceDate=?", (capFilter, priceDate, ))
		c.execute("SELECT symbol FROM MAGIC_COMPANIES WHERE capFilter=?", (capFilter, ))
		return c.fetchall();

	def getScoredCompanies(self):
		capFilters = self.getCapFilters()
		c = self.conn.cursor()
		for capFilter in capFilters:
			c.execute("SELECT symbol from MAGIC_COMPANIES where capFilter=?", (capFilter, ))
		return c.fetchall();
		


	def addCompanies(self, symbol, name, sector, industry):
		c = self.conn.cursor()
		c.execute("INSERT INTO COMPANIES VALUES (?, ?, ?, ?)",
			(symbol, capFilter, priceDate, quarterDate, rank))

	def addCompaniesFromCSV(self):
		c = self.conn.cursor()
		with open('data/NASDAQ_NYSE_companylist.csv','rb') as fin: # `with` statement available in 2.5+
			# csv.DictReader uses first line in file for column headings by default
			dr = csv.DictReader(fin) # comma is default delimiter
			to_db = [( i['Symbol'], i['Name'], i['Sector'], i['Industry'] ) for i in dr]

		c.executemany("INSERT INTO COMPANIES (symbol, name, sector, industry) VALUES (?, ?, ?, ?);", to_db)
		self.conn.commit()
		#self.conn.close()

	def addMagicCompany(self, symbol, capFilter, priceDate, quarterDate, rank ):
		c = self.conn.cursor()
		c.execute("INSERT INTO MAGIC_COMPANIES VALUES (?, ?, ?, ?, ?)",
			(symbol, capFilter, marcap, priceDate, quarterDate, rank))
		self.conn.commit()

	def addMagicCompaniesFromCSV(self, magic_file):
		if magic_file:
			c = self.conn.cursor()
			csv_path = 'data/magic_csv/'+magic_file+'.csv'
			with open(csv_path,'rb') as fin: # `with` statement available in 2.5+
				# csv.DictReader uses first line in file for column headings by default
				dr = csv.DictReader(fin) # comma is default delimiter
				to_db = [( i['symbol'], i['marcap'], i['priceDate'], i['quarterDate'], i['capFilter'], i['rank'] ) for i in dr]

			c.executemany("INSERT INTO MAGIC_COMPANIES (symbol, marcap, priceDate, quarterDate, capFilter, rank) VALUES (?, ?, ?, ?, ?, ?);", to_db)
			self.conn.commit()
			#self.conn.close()

# This class will fetch a web page from the WWW. However, if the web page
# exists in the cache, it will instead use the cached version.
class PageCache:
	def __init__(self):
		if not os.path.exists( CACHE_FOLDER ):
			os.mkdir( CACHE_FOLDER )

	def get( self, url, fname = None ):
		if fname == None:
			fname = hashlib.sha1(url).hexdigest()
		fname = os.path.join( CACHE_FOLDER, fname )

		if os.path.exists( fname ):
			return open( fname, "rt" ).read()
		else:
			print "Retrieve: %s" % url
			f = urllib.urlopen(url)
			content = f.read()
			f.close()
			f = open( fname, "w" );
			f.write( content );
			f.close()
			return content

class EmptyClass: pass

class MagicPage:
	def __init__(self):
		#print "MagicPage__init__"
		self.db = Database()

	html_wrapper = """
		<!DOCTYPE html>
		<html lang="en">
			<head>%s<head>
			<body>%s</body>
		<html>
	"""

	head_wrapper = """
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Magic Formula Comparator</title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
		<link href="css/magicpage.css" rel="stylesheet">
		<!--<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>-->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
		<script src="js/magicpage.js"></script>
	"""

	body_wrapper = """
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-3 col-md-2 sidebar">
					<ul class="nav nav-sidebar">
						<li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
						<li><a href="#">Reports</a></li>
						<li><a href="#">Analytics</a></li>
						<li><a href="#">Export</a></li>
					</ul>
				</div>
				<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
					<h2 class="sub-header">Section title</h2>
					<div class="table-responsive">
						<table class="table table-striped">
							<thead>%s</thead>
							<tbody>%s</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	"""

	thead_tr_wrapper = """
		<tr>
			<th class""></th>
			%s
		</tr>
	"""

	thead_th_wrapper = """
		<th>%s</th>
	"""

	tr_wrapper = """
		<tr class="capFilter %s">
			<td class"capFilter-rank %s">%s</td>
			%s
		</tr>
	"""

	td_wrapper = """
		<td class="magic-symbol sector %s %s" title="Sector: %s">%s</td>
	"""

	def getSectorClass(self, symbol):
		#print "getSectorClass"
		#print symbol
		sector = self.db.getCompanySector(symbol)
		return "sector-%s" % sector.lower().replace(" ", "-")

	def makeThead(self,  capFilterRankedLength):
		thead_th = ""
		for i in range(capFilterRankedLength):
			thead_th = thead_th + self.thead_th_wrapper % str(i+1)

		thead_tr = self.thead_tr_wrapper % thead_th
		return thead_tr

	def makeTbody(self, capFilterRanked, capFilter):
		tbody_tr = ""
		tbody_td = ""
		for symbol in capFilterRanked:
			sym = str(symbol[0])
			symSectorClass = self.getSectorClass(sym)
			symSector = self.db.getCompanySector(sym)
			symClass = "class-"+sym
			tbody_td = tbody_td + self.td_wrapper % (symSectorClass, symClass, symSector, sym)

		tbody_tr = self.tr_wrapper % ("tr"+str(capFilter), "tr"+str(capFilter), capFilter, tbody_td)
		return tbody_tr

	def makeHTML(self):
		import datetime

		program = 'mfiScreenerComparator'
		#now = datetime.datetime.today().strftime("%Y%m%d-%H%M%S")
		filename = program + '.html'
		f = open(filename,'w')

		thead = ""
		tbody = ""
		capFilterRanked = []
		capFilters = self.db.getCapFilters()
		#print capFilters
		for capFilter in capFilters:
			capFilterRanked = self.db.getRankedByCapFilter(capFilter[0])
			tbody = tbody + self.makeTbody(capFilterRanked, capFilter[0])

		thead = self.makeThead(len(capFilterRanked))

		head = self.head_wrapper
		body = self.body_wrapper % (thead, tbody)
		html = self.html_wrapper % (head, body)

		f.write(html)
		f.close()

# The Pleco class contains logic for scraping the stock information from the
# internet.
class Magic:
	def __init__(self):
		self.db = Database()
		#self.webCache = PageCache()
		self.mp = MagicPage()

	def loadCompaniesCSV(self):
		#print "Load Companies CSV"
		self.db.addCompaniesFromCSV()

	def loadMagicCompany(self):
		#print "Load Magic Companies CSV"
		symbol = "AMAG"
		capFilter = 500
		priceDate = 20170602
		quarterDate = 20170331
		rank = 1

		self.db.addMagicCompany(symbol, capFilter, priceDate, quarterDate, rank )

	def loadMagicCompaniesCSV(self, magic_file):
		#print "Load Magic Companies CSV"
		self.db.addMagicCompaniesFromCSV(magic_file)

	def run(self):
		for i in range(1, len(sys.argv)):
			if sys.argv[i] == "--companies":
				self.loadCompaniesCSV()
			if sys.argv[i] == "--mcompanies":
				magic_file = sys.argv[2]
				self.loadMagicCompaniesCSV(magic_file)
			if sys.argv[i] == "--makeMagicPage":
				self.mp.makeHTML()
			if sys.argv[i] == "--help":
				print
				print "*****************************"
				print "Welcome the my stock screener"
				print "_____________________________"
				print
				print "Available options are: "
				print "1. --all"
				print "     This argument will fetch and update all the stocks across DOW, NYSE and NASDAQ"
				print
				print "2. --sector <option>"
				print "     This argument will fetch and update all the stocks across DOW, NYSE and NASDAQ for the given sector"
				print
				print "3. --symbol <option>"
				print "     This argument will fetch and update all the information for a particular symbol"
				print
				print "4. --all"
				print "     This argument will fetch and update all the stocks across DOW, NYSE and NASDAQ"


Magic().run()