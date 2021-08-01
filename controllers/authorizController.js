// validatsiy qilish uchun npm obj...
const joi = require('joi');
// modeldan obj olamiz db dan malumotlarni olish uchun...
const ResultModel = require('../models/authorizModel');
// class ochamiz control qilish uchun...
class authorizationCon {

  async authorization(req, res) {
    try {
      const answer = await ResultModel(req.body);
      if(answer.length == 0){
        res.status(404).send({result: 'error',data:'Malumot topilmadi..'});
      }else{
        res.status(200).send({result: 'ok',data: answer});
      }
    } catch (ex) {
      console.log('qidirishda xatolik:'+ex);
      console.log(req.body);
    }
  }
}

module.exports = new authorizationCon();
