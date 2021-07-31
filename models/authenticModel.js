// ulangan bazadan obj olish uchun..
const db = require('../usedb/db');

async function signup(reqB) {
  const registration = new db({
     name: reqB.name,
     email: reqB.email,
     password: reqB.password
  });
  try {
     return await registration.save();
  } catch (ex) {
     console.log('hujjatga joylashda xatolik:' + ex);
     return 'xatolik:'+ex;
  }
}

module.exports = signup;



