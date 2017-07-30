var Horseman = require('node-horseman');
var horseman = new Horseman({'ignoreSSLErrors': true, 'timeout': 10000, 'sslProtocol': 'any'});

horseman
  .userAgent('Mozilla/5.0 (Windows NT 6.1; WOW64; rv:27.0) Gecko/20100101 Firefox/27.0')
  .open('http://www.magicformulainvesting.com/Account/LogOn')
  .log()
  //.waitForNextPage()
  .type('input[id="Email"]', 'buffettology9@gmail.com')
  .type('input[id="Password"]', 'greenblight99')
  .click('[id="login"]')
  .keyboardEvent('keypress', 16777221)
  .waitForNextPage()
  .waitForSelector('input#MinimumMarketCap')
  .type('input#MinimumMarketCap', '400')
  .click('[id="stocks"]')
  .keyboardEvent('keypress', 16777221)
  .waitForSelector('div#tableform')
  .count('tr')
  .log() // prints out the number of results
  .close();