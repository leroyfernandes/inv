var winston = require('winston');
var today = new Date();
today = today.toISOString().substring(0, 10).replace(/-/g,"");

var mfifile = today+'.log';

winston.add(winston.transports.File, { filename: mfifile, level: 'info' });

winston.log('info', 'this winston logger');