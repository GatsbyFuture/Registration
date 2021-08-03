// ulangan bazadan obj olish uchun..
const db = require('../usedb/db');

async function signin(reqB) {
  try {
     return await db.findOne({email:reqB.email});
  } catch (ex) {
     console.log('hujjatni topishda xatolik:' + ex);
     return 'xatolik:'+ex;
  }
}

module.exports = signin;



