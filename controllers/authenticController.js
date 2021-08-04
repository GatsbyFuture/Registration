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
        const answer = await ResultModel(req.body);
        if(typeof(answer) == 'string')
        res.status(400).send({result:'error',data:answer});
        else
        res.status(200).send({result:'ok',data:answer});
      }
    } catch (ex) {
      console.log('registrationda xatolik:'+ex);
      console.log(req.body);
    }
    function validation(bodM) {
      const validatSchema = {
        name: joi.string().required().min(3),
        email: joi.string().required().min(7),
        password: joi.string().required().min(4),
        isAdmin: joi.boolean().required()
      };
      return joi.validate(bodM,validatSchema);
    }
  }
}

module.exports = new authenticationCon();
