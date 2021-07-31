// validatsiy qilish uchun npm obj...
const joi = require('joi');
// modeldan obj olamiz db dan malumotlarni olish uchun...
const ResultModel = require('../models/authenticModel');
// class ochamiz control qilish uchun...
class authenticationCon {

  async registration(req, res) {
    try {
      const {error} = validation(req.body);
      if(error){
        return res.status(400).send('Kirish validatorida xatolik:'+error);
      }else{
        const result = await ResultModel(req.body);
        res.status(400).send(result);
      }
    } catch (ex) {
      console.log('registrationda xatolik:'+ex);
      console.log(req.body);
    }
    function validation(bodM) {
      const validatSchema = {
        name: joi.string().required().min(3),
        email: joi.string().required().min(7),
        password: joi.string().required().min(4)
      };
      return joi.validate(bodM,validatSchema);
    }
  }
}

module.exports = new authenticationCon();
