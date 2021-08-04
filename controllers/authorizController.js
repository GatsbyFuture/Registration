require('dotenv').config({ path: './environment/parols.env' });
// validatsiy qilish uchun npm obj...
const joi = require('joi');
// modeldan obj olamiz db dan malumotlarni olish uchun...
const ResultModel = require('../models/authorizModel');
// shifirlash uchun code yozamiz...
const bcrypt = require('bcrypt');
// JWT uchun obj olamiz...
const jwt = require('jsonwebtoken');
// config fileni ochib olamiz maxviylikni saqlash uchun...
const config = require('config');
// class ochamiz control qilish uchun...
class authorizationCon {

  async authorization(req, res) {
    try {
      const { error } = validation(req.body);
      if (error) {
        return res.status(400).send('Kirish validatorida xatolik:' + error);
      } else {
        let answer = await ResultModel(req.body);
        if (answer.length == 0) {
          res.status(400).send({ result: 'error', data: 'Parol yoki email xato kiritilgan..' });
        } else {
          const isValidate = await bcrypt.compare(req.body.password, answer.password);
          if (!isValidate)
            return res.status(400).send({ result: 'error', data: 'Parol yoki email xato kiritilgan..' });
          const token = jwt.sign({ _id: answer._id , admin:answer.isAdmin }, config.get('jwtPrivateKey'));
          res.header('x-auth-token', token).send(true);
        }
      }
    } catch (ex) {
      console.log('registrationda xatolik:' + ex);
      console.log(req.body);
    }
    function validation(bodM) {
      const validatSchema = {
        email: joi.string().required().min(7),
        password: joi.string().required().min(4)
      };
      return joi.validate(bodM, validatSchema);
    }

  }
}

module.exports = new authorizationCon();
