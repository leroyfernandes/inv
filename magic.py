#!/usr/bin/python
import os
import sys
import re
from BeautifulSoup import BeautifulSoup
import sqlite3, csv
import urllib
import hashlib
import time
import json
import pprint

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
	Symbol TEXT,
	LastTradeDate DATE,
	LastTradePriceOnly INTEGER,
	PERatio DECIMAL(1,2),
	PEGRatio INTEGER,
	MarketCapitalization TEXT,
	EBITDA TEXT,
	EPSEstimateCurrentYear INTEGER,
	EPSEstimateNextQuarter INTEGER,
	EPSEstimateNextYear INTEGER,
	PriceEPSEstimateCurrentYear INTEGER,
	PriceEPSEstimateNextYear INTEGER,
	ShortRatio INTEGER,
	OneyrTargetPrice INTEGER,
	FiftydayMovingAverage INTEGER,
	TwoHundreddayMovingAverage INTEGER,
	PercentChangeFromFiftydayMovingAverage INTEGER,
	PercentChangeFromTwoHundreddayMovingAverage INTEGER,
	YearHigh INTEGER,
	YearLow INTEGER,
	DividendShare INTEGER,
	DividendYield INTEGER
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
DATA_FOLDER = ""
SCRAPER_FOLDER = ""

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
	
	def getCompanyName(self, symbol):
		c = self.conn.cursor()
		c.execute("SELECT name from COMPANIES where symbol=?", (symbol, ))
		name = c.fetchone();
		if name is None:
			return "Unknown"
		else:
			return name[0]

	def getMagicCompaniesByPriceDate(self, priceDate):
		#if not priceDate:
		priceDate =  self.getLatestPriceDate()
		pprint.pprint(priceDate)

		c = self.conn.cursor()
		c.execute("SELECT DISTINCT symbol FROM MAGIC_COMPANIES WHERE priceDate=?", (priceDate, ))
		distinct_symbols = c.fetchall();

		#pprint.pprint(str(distinct_symbols))

		return distinct_symbols

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

	def addMagicCompaniesFromLog(self, magic_file):
		if magic_file:
			log_path = 'scraper/'+magic_file+'.log'
			log_string = 'symbol,marcap,priceDate,quarterDate,capFilter,rank,\n'
			with open(log_path, 'rb') as fin:
				for line in fin:
					while(True):
						try:
							json_data = json.loads(line)
							# We have a complete onject here
							log_string = log_string + (str(json_data['message']))
							# Try and find a new JSON object
							break
						except ValueError:
							# We don't have a complete JSON object
							# read another line and try again
							line += next(infile)
			pprint.pprint(log_string)

			f = open( "data\magic_csv\\"+magic_file+".csv", "w" );
			f.write( log_string );
			f.close()

	def getYahooQuotesJSON(self, priceDate):
		distinct_companies = self.getMagicCompaniesByPriceDate(self)
		yahoo_format = ''
		for company in distinct_companies:
			yahoo_format = yahoo_format + str(company[0]) + ','

		print str(yahoo_format)

	def parseYahooQuotesJSON(self, yahoo_json):
		if yahoo_json:
			c = self.conn.cursor()
			json_path = 'data/yahoo_json/'+yahoo_json+'.json'
			with open(json_path) as fin:    
				data = json.load(fin)

			for e in data['query']['results']['quote']:
				Symbol = e['Symbol']
				LastTradeDate = e['LastTradeDate']
				LastTradePriceOnly = e['LastTradePriceOnly']
				PERatio = e['PERatio']
				PEGRatio = e['PEGRatio']
				MarketCapitalization = e['MarketCapitalization']
				EBITDA = e['EBITDA']
				EPSEstimateCurrentYear = e['EPSEstimateCurrentYear']
				EPSEstimateNextQuarter = e['EPSEstimateNextQuarter']
				EPSEstimateNextYear = e['EPSEstimateNextYear']
				PriceEPSEstimateCurrentYear = e['PriceEPSEstimateCurrentYear']
				PriceEPSEstimateNextYear = e['PriceEPSEstimateNextYear']
				ShortRatio = e['ShortRatio']
				OneyrTargetPrice = e['OneyrTargetPrice']
				FiftydayMovingAverage = e['FiftydayMovingAverage']
				TwoHundreddayMovingAverage = e['TwoHundreddayMovingAverage']
				PercentChangeFromFiftydayMovingAverage = e['PercentChangeFromFiftydayMovingAverage']
				PercentChangeFromTwoHundreddayMovingAverage = e['PercentChangeFromTwoHundreddayMovingAverage']
				YearHigh = e['YearHigh']
				YearLow = e['YearLow']
				DividendShare = e['DividendShare']
				DividendYield = e['DividendYield']
				print "Row: " + Symbol
				c.execute("INSERT INTO FINANCIALS VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", 
					(Symbol, LastTradeDate, LastTradePriceOnly, PERatio, PEGRatio, MarketCapitalization, EBITDA, 
						EPSEstimateCurrentYear, EPSEstimateNextQuarter, EPSEstimateNextYear, PriceEPSEstimateCurrentYear, PriceEPSEstimateNextYear, 
						ShortRatio, OneyrTargetPrice, FiftydayMovingAverage, TwoHundreddayMovingAverage, 
						PercentChangeFromFiftydayMovingAverage, PercentChangeFromTwoHundreddayMovingAverage, 
						YearHigh, YearLow, DividendShare, DividendYield ))
			
			self.conn.commit()

	def getFinancials(self, symbol):
		c = self.conn.cursor()
		c.execute("SELECT LastTradeDate, LastTradePriceOnly, PERatio, PEGRatio, MarketCapitalization, EBITDA, EPSEstimateCurrentYear, EPSEstimateNextQuarter, EPSEstimateNextYear, PriceEPSEstimateCurrentYear, PriceEPSEstimateNextYear, ShortRatio, OneyrTargetPrice, FiftydayMovingAverage, TwoHundreddayMovingAverage, PercentChangeFromFiftydayMovingAverage, PercentChangeFromTwoHundreddayMovingAverage, YearHigh, YearLow, DividendShare, DividendYield FROM FINANCIALS WHERE symbol=? ORDER BY LastTradeDate DESC LIMIT 1", (symbol, ))
		a = c.fetchall()[0]
		a_a = []
		for item in a:
			a_a.append(item)
		#print a_a
		return a_a;

	def getMagicDataDates(self):
		c = self.conn.cursor()
		c.execute("SELECT DISTINCT priceDate FROM MAGIC_COMPANIES")
		return c.fetchall()

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
		<link href="https://fonts.googleapis.com/css?family=Titillium+Web|Ubuntu+Mono" rel="stylesheet">
	"""

	body_wrapper = """
		<nav class="navbar navbar-default navbar-fixed-top">
			<div class="container-fluid">
				<div class="sector-legend">
					<div class="sector-tile">
						<span class="sector sector-consumer-services"></span>
						<span class="sector-name">Consumer Services</span>
					</div>
					<div class="sector-tile">
						<span class="sector sector-health-care"></span>
						<span class="sector-name">Health Care</span>
					</div>
					<div class="sector-tile">
						<span class="sector sector-technology"></span>
						<span class="sector-name">Technology</span>
					</div>
					<div class="sector-tile">
						<span class="sector sector-capital-goods"></span>
						<span class="sector-name">Capital Goods</span>
					</div>

					<div class="sector-tile">
						<span class="sector sector-basic-industries"></span>
						<span class="sector-name">Basic Industries</span>
					</div>
					<div class="sector-tile">
						<span class="sector sector-energy"></span>
						<span class="sector-name">Energy</span>
					</div>
					<div class="sector-tile">
						<span class="sector sector-consumer-durables"></span>
						<span class="sector-name">Consumer Durables</span>
					</div>
					<div class="sector-tile">
						<span class="sector sector-miscellaneous"></span>
						<span class="sector-name">Misc</span>
					</div>

					<div class="sector-tile">
						<span class="sector sector-consumer-non-durables"></span>
						<span class="sector-name">Consumer ND</span>
					</div>
					<div class="sector-tile">
						<span class="sector sector-finance"></span>
						<span class="sector-name">Finance</span>
					</div>
					<div class="sector-tile">
						<span class="sector sector-transportation"></span>
						<span class="sector-name">Transportation</span>
					</div>

					<div class="sector-tile">
						<span class="sector sector-unknown"></span>
						<span class="sector-name">Unknown</span>
					</div>
				</div>
			</div>
		</nav>
		<div class="container-fluid">
			<div class="row">
				<div class="col-sm-3 col-md-2 sidebar">
					<ul class="nav nav-sidebar">
						<li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
						<li><a href="#">Reports</a></li>
						<li><a href="#">Analytics</a></li>
						<li><a href="#">Export</a></li>
					</ul>
					<div class="table-selector">
						<select class="form-control">
							%s
						</select>
					</div>
				</div>
				<div class="col-sm-9 col-md-10 main">
					<h2 class="sub-header">Moneymaker</h2>
					<div class="table-responsive">
						%s
					</div>
				</div>
			</div>
		</div>
	"""

	table_selector_options = """
		<option >%s</option>
	"""

	magic_table = """
		<table class="table table-striped magic-table-%s">
			<thead>%s</thead>
			<tbody>%s</tbody>
		</table>
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
	data_content = """
		Sector: %s<br/>
		Reversion: %s (%s-%s-%s)<br/>
		PE Ratio: %s<br/>
		PEG Ratio: %s<br/>
		DividendShare: %s<br/>
		DividendYield: %s<br/>
		MarketCapitalization: %s<br/>
		EBITDA: %s<br/>
		EPSEstimateCurrentYear: %s<br/>
		EPSEstimateNextQuarter: %s<br/>
		EPSEstimateNextYear: %s<br/>
		PriceEPSEstimateCurrentYear: %s<br/>
		PriceEPSEstimateNextYear: %s<br/>
		ShortRatio: %s<br/>
		OneyrTargetPrice: %s<br/>
		FiftydayMovingAverage: %s (%s)<br/>
		TwoHundreddayMovingAverage: %s (%s)<br/>

	"""

	td_wrapper = """
		<td class="">
			<div class="magic-symbol sector %s %s" data-sector="%s" title="%s" data-content="%s" data-trigger="hover" data-peg="%s">
				<span class="symbol">%s</span>
				<span class="reversion">
					<span class="reversion-percent" style="width:%s"></span>
				</span>
			</div>
		</td>
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
		data_content = ""
		for symbol in capFilterRanked:
			sym = str(symbol[0])
			symSectorClass = self.getSectorClass(sym)
			symSector = self.db.getCompanySector(sym)
			symName = self.db.getCompanyName(sym)
			symFinancials = self.db.getFinancials(sym)
			symClass = "class-"+sym
			reversion = round((symFinancials[17]-symFinancials[1])/(symFinancials[17]-symFinancials[18]), 2)
			#print reversion
			#LastTradeDate, LastTradePriceOnly, PERatio, PEGRatio, MarketCapitalization, EBITDA, 
			#EPSEstimateCurrentYear, EPSEstimateNextQuarter, EPSEstimateNextYear, PriceEPSEstimateCurrentYear, PriceEPSEstimateNextYear, ShortRatio, OneyrTargetPrice, 
			#FiftydayMovingAverage, TwoHundreddayMovingAverage, PercentChangeFromFiftydayMovingAverage, PercentChangeFromTwoHundreddayMovingAverage,

			data_content = self.data_content % ( symSector, reversion, symFinancials[18], symFinancials[1], symFinancials[17], symFinancials[2], symFinancials[3], symFinancials[19], symFinancials[20], symFinancials[4], symFinancials[5], symFinancials[6], symFinancials[7], symFinancials[8], symFinancials[9], symFinancials[10], symFinancials[11], symFinancials[12], symFinancials[13], symFinancials[15], symFinancials[14], symFinancials[16] )
			tbody_td = tbody_td + self.td_wrapper % (symSectorClass, symClass, symSectorClass, symName, data_content, symFinancials[3], sym, str((reversion*100))+'%')

		tbody_tr = self.tr_wrapper % ("tr"+str(capFilter), "tr"+str(capFilter), capFilter, tbody_td)
		return tbody_tr

	def magicPriceDates(self):
		priceDates = self.db.getMagicDataDates()
		options = ""
		for date in priceDates:
			options = options + self.table_selector_options % (str(date[0]))
		
		return options

	def makeMagicTables(self):
		priceDates = self.db.getMagicDataDates()
		capFilters = self.db.getCapFilters()
		
		tables = ""
		table = ""
		thead = ""
		tbody = ""
		capFilterRanked = []
		
		#thead = self.makeThead(len(capFilterRanked))
		thead = self.makeThead(30)
		print thead 

		for date in priceDates:
			table_class_date = str(date[0])
			for capFilter in capFilters:
				capFilterRanked = self.db.getRankedByCapFilter(capFilter[0])
				tbody = tbody + self.makeTbody(capFilterRanked, capFilter[0])
				
			tables = tables + self.magic_table % (table_class_date, thead, tbody)

		return tables

	def makeHTML(self):
		import datetime

		program = 'mfiScreenerComparator'
		#now = datetime.datetime.today().strftime("%Y%m%d-%H%M%S")
		filename = program + '.html'
		f = open(filename,'w')

		#print capFilters
		options = self.magicPriceDates()
		tables = self.makeMagicTables()

		head = self.head_wrapper
		body = self.body_wrapper % (options, tables)
		
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

	def setupMagic(self):
		self.db = Database()
		#self.webCache = PageCache()
		self.mp = MagicPage()
		#self.db.addCompaniesFromCSV()

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

	def loadMagicCompaniesLog(self, magic_file):
	#print "Load Magic Companies CSV"
		self.db.addMagicCompaniesFromLog(magic_file)

	def parseYahooQuotesJSON(self, yahoo_file):
		self.db.parseYahooQuotesJSON(yahoo_file)

	def run(self):
		for i in range(1, len(sys.argv)):
			if sys.argv[i] == "--setupMagic":
				self.setupMagic()
			if sys.argv[i] == "--companies":
				self.loadCompaniesCSV()
			if sys.argv[i] == "--mcompanies":
				magic_file = sys.argv[2]
				self.loadMagicCompaniesCSV(magic_file)
			if sys.argv[i] == "--mcompaniesl":
				magic_file = sys.argv[2]
				self.loadMagicCompaniesLog(magic_file)
			if sys.argv[i] == "--makeMagicPage":
				self.mp.makeHTML()
			if sys.argv[i] == "--yahoo":
				yahoo_file = sys.argv[2]
				self.parseYahooQuotesJSON(yahoo_file)
			if sys.argv[i] == "--distinct_sym_priceDate":
				priceDate = ''
				self.db.getYahooQuotesJSON(priceDate)
				
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