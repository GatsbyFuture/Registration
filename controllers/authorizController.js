// validatsiy qilish uchun npm obj...
const joi = require('joi');
// modeldan obj olamiz db dan malumotlarni olish uchun...
const ResultModel = require('../models/authorizModel');
// class ochamiz control qilish uchun...
class authorizationCon {

  async authorization(req, res) {
    try {
      const result = await ResultModel(req.body);
      res.status(400).send(result);
    } catch (ex) {
      console.log('qidirishda xatolik:'+ex);
      console.log(req.body);
    }
  }
}

module.exports = new authorizationCon();
