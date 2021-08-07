// ulangan bazadan obj olish uchun..
const db = require('../startup/db');

async function readUsers() {
      // try {
            return await db.find();
      // } catch (ex) {
            // console.log('hujjatni topishda xatolik:' + ex);
            // return 'Serverda utilmagan xatolik ro\'y berdi:' + ex;
      // }
}
async function readUserId(id) {
      try {
            return await db.find({ _id: id });
      } catch (ex) {
            console.log('hujjatni id bo\'ylab izlashda xatolik');
            return 'Serverda utilmagan xatolik ro\'y berdi:' + ex;
      }
}
async function updateUser(reqB) {
      try {
            return await db.updateOne({ _id: reqB.id }, {
                  $set: {
                        name: reqB.name,
                        email: reqB.email
                  }
            });
      } catch (ex) {
            console.log('hujjatni id bo\'ylab yangilashda xatolik');
            return 'Serverda utilmagan xatolik ro\'y berdi:' + ex;
      }
}
async function deleteUser(id) {
      try {
            return await db.deleteOne({ _id: id });
      } catch (ex) {
            console.log('hujjatni o\'chirishda xatolik');
            return 'Serverda utilmagan xatolik ro\'y berdi:' + ex;
      }
}
async function queryPerson(id) {
      try {
            return await db.findOne({_id:id})
            .select('-password');
      } catch (ex) {
            console.log('shaxsni aniqlashda xatolik..');
            return 'Serverda utilmagan xatolik ro\'y berdi:' + ex;
      }
}
module.exports = {
      readUsers,
      readUserId,
      updateUser,
      deleteUser,
      queryPerson

};