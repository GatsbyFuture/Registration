// ulangan bazadan obj olish uchun..
const db = require('../usedb/db');
// passvordni haslash uchun npm paketidan obj..
const bcrypt = require('bcrypt');
// formulani qisqartishish uchun lodash npm dan foydalanamiz
const _ = require('lodash');

async function signup(reqB) {
      let sourch = await db.find({email:reqB.email});
      if(sourch.length == 0){
         sourch = new db(_.pick(reqB,
            ['name','email','password','isAdmin']));
         const salt = await bcrypt.genSalt();
         sourch.password = await bcrypt.hash(sourch.password,salt);   
         try {
            await sourch.save();
            return _.pick(sourch,['_id','name','email','isAdmin']);
         } catch (ex) {
            console.log('hujjatga joylashda xatolik:' + ex);
         }
      }else{
            return 'Bunday email mavjud boshqa kiriting';
      }
}

module.exports = signup;



