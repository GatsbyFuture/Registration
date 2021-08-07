// asosiy paketlardan obj olish...
require('dotenv').config({ path: './environment/parols.env' });
const express = require('express');
const morgan = require('morgan');
const config = require('config');
const winston = require('winston');
const app = express();

require('./startup/logging')();
require('./startup/middlewares')(app);

// qaysi muhitda ishlayotganini tekshirish...
if (app.get('env') == 'development') {
 app.use(morgan('tiny'));
 console.log('development ishlayapti..');
}

const port = process.env.PORT || 5000;
app.listen(port, function () {
 winston.error(`${port} - portga ulanish amalga oshirildi...`);
});