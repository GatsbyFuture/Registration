// mongoodbga ulanish va export qilish file
const mongoose = require('mongoose');
const winston = require('winston');
require('winston-mongodb');


mongoose.connect('mongodb://localhost/authentication', {
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true,
useFindAndModify: false
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
 },
 isAdmin:{
  type:Boolean,
  required:true
 }

},{collection:'authenc'});

module.exports = mongoose.model('authenc', authcschema);