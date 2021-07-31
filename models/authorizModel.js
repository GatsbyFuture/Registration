// ulangan bazadan obj olish uchun..
const db = require('../usedb/db');

async function signin(reqB) {
  try {
     return 'hellooo! your key '+reqB.password;
  } catch (ex) {
     console.log('hujjatni topishda xatolik:' + ex);
     return 'xatolik:'+ex;
  }
}

module.exports = signin;



