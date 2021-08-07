// xatolarni boshqarish uchun code
require('express-async-errors');
const winston = require('winston');
require('winston-mongodb');
module.exports = function () {
 // middleware qaytargan xatolikni ushlab filega yozish...
 // Console() tarnsporti consolega yozish uchun ishlatiladi...
 winston.add(new winston.transports.Console());
 // File transporti yangi file yaratadi va shuni ichiga xatolarni yozadi...
 winston.add(new winston.transports.File({ filename: 'xatolik' }));
 // MongoDB transporti esa mongodbda collection yaratadi va o'sha yoqda yaratadi..
 winston.add(new winston.transports.MongoDB({ db: 'mongodb://localhost/errors' }));
 // winston yordamida handle qildik va process.on bajarishi kerakligini winston bajardi 
 winston.exceptions.handle(new winston.transports.Console(),
  new winston.transports.File({ filename: 'boshqa-xatolar' }));

 process.on('unhandledRejection', function (ex) {
  throw ex;
 });
};