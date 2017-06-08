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
	
	def addCompanies(self, symbol, name, sector, induztry):
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

# The Pleco class contains logic for scraping the stock information from the
# internet.
class Magic:
	def __init__(self):
		self.db = Database()
		#self.webCache = PageCache()

	def loadCompaniesCSV(self):
		print "Load Companies CSV"
		self.db.addCompaniesFromCSV()

	def loadMagicCompany(self):
		print "Load Magic Companies CSV"
		symbol = "AMAG"
		capFilter = 500
		priceDate = 20170602
		quarterDate = 20170331
		rank = 1

		self.db.addMagicCompany(symbol, capFilter, priceDate, quarterDate, rank )

	def loadMagicCompaniesCSV(self, magic_file):
		print "Load Magic Companies CSV"
		self.db.addMagicCompaniesFromCSV(magic_file)

	def run(self):
		for i in range(1, len(sys.argv)):
			if sys.argv[i] == "--companies":
				self.loadCompaniesCSV()
			if sys.argv[i] == "--mcompanies":
				magic_file = sys.argv[2]
				self.loadMagicCompaniesCSV(magic_file)
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