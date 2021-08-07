// xatolarni boshqarish bilan maxfiylik uchun obj
const winston = require('winston');
const config = require('config');
module.exports = function () {
 // jwtprivatekey jwt uchun maxviy kalit hisobida ishlatiladi..
 // shu tufayli uni tekshirishimiz zarur!!
 if (!config.get('jwtPrivateKey')) {
  throw ('Xavfli xatolik: registration_jwtPrivateKey aniqlanmagan');
 }
};