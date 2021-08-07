// expresdan obj olamiz;
const express = require('express');
// xatolarni ushlash uchun obj olamiz..
const { middleError } = require('../midlleware/authoriz');
// routerlardan obj olish...
const helmet = require('helmet');
const authc = require('../routers/authenticRouter');
const authz = require('../routers/authorizRouter');
const crud = require('../routers/CruddbRouter');

module.exports = function(app){
// midlleware functionlarni chaqirish...
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
// routerlarga yo'nalish ko'rsatish...
app.use('/authenc', authc);
app.use('/authoz', authz);
app.use('/crud', crud);
app.use(middleError);

};