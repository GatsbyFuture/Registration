// ulangan bazadan obj olish uchun..
const db = require('../usedb/db');

async function readUsers() {
 try {
  return await db.find();
 } catch (ex) {
  console.log('hujjatni topishda xatolik:' + ex);
  return 'xatolik:' + ex;
 }
}
async function readUserId(id) {
 try {
  return await db.find({_id:id});
 } catch (ex) {
  console.log('hujjatni id bo\'ylab izlashda xatolik');
  return 'xatolik:' + ex;
 }
}
async function updateUser(reqB) {
 try {
  return await db.updateOne({_id:reqB.id},{
   $set:{
         name:reqB.name,
         email:reqB.email
   }
  });
 } catch (ex) {
  console.log('hujjatni id bo\'ylab yangilashda xatolik');
  return 'xatolik:' + ex;
 }
}
module.exports = {
 readUsers,
 readUserId,
 updateUser

};