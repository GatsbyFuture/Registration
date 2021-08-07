// validatsiy qilish uchun npm obj...
const joi = require('joi');
// modeldan obj olamiz db dan malumotlarni olish uchun...
const { readUsers, readUserId,
  queryPerson, updateUser, deleteUser } = require('../models/CruddbModel');

class cruddbcontroller {
 // Barcha userlarni olib berish uchun api con...
 async person(req,res){
   const answerZero = await queryPerson(req.user._id);
   res.send(answerZero);
 }
 async readAll(req, res) {
  // try {
   const answerOne = await readUsers();
   if (answerOne.length == 0)
    res.status(400).send({ header: "error", result: 'Bazada hech qanday malumot yo\'q' });
   else
    res.status(200).send({ header: "ok", result: answerOne });
  // } catch (ex) {
  //  res.status(500).send('Malumotlarni o\'qishda xatolik' + ex);
  // }
 }
 async readId(req, res) {
  try {
   const answerTwo = await readUserId(req.params.id);
   if (answerTwo.length == 0)
    res.status(400).send({ header: "error", result: 'izlangan malumot mavzudmas!' });
   else
    res.status(200).send({ header: "ok", result: answerTwo });
  } catch (ex) {
   res.status(400).send('Malumotlarni o\'qishda xatolik' + ex);
  }
 }
 async updateId(req, res) {
  try {
   const answerThree = await updateUser(req.body);
   if (typeof (answerThree) == 'string')
    res.status(400).send({ header: "error", result: 'izlangan malumot mavzudmas!'+answerThree });
   else 
    res.status(200).send({ header: "ok", result: answerThree });
  } catch (ex) {
   res.status(400).send('Malumotlarni o\'qishda xatolik' + ex);
  }
 }
 async deleteUserId(req, res) {
  try {
   const answerFour = await deleteUser(req.params.id);
   if (typeof (answerFour) == 'string' || answerFour.n == 0)
    res.status(500).send({ header: "error", result: answerFour });
   else
    res.status(200).send({ header: "ok", result: answerFour });
  } catch (ex) {
   res.status(400).send('Malumotlarni o\'qishda xatolik' + ex);
  }
 }
}

module.exports = new cruddbcontroller();
