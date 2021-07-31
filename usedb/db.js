// mongoodbga ulanish va export qilish file
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authentication', {
 useNewUrlParser: true,
 useUnifiedTopology: true
})
 .then(() => {
  console.log('dbga ulanish amalga oshirildi...');
 })
 .catch((ex) => {
  console.log('dbga ulanishda xatolik ro\'y berdi..' + ex);
 });

const authcschema = new mongoose.Schema({
 name: {
  type: String,
  required: true,
  minlength: 3
 },
 email: {
  type: String,
  required: true,
  minlength: 7,
  unique: true
 },
 password: {
  type: String,
  required: true,
  min: 4
 }
},{collection:'authenc'});

module.exports = mongoose.model('authenc', authcschema);