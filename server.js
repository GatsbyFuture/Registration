// asosiy paketlardan obj olish...
const express = require('express');
require('dotenv').config({ path: './environment/parols.env' });
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
// routerlardan obj olish...
const authc = require('./routers/authenticRouter');
const authz = require('./routers/authorizRouter');
const crud = require('./routers/CruddbRouter');
const app = express();
// midlleware functionlarni chaqirish...
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
// routerlarga yo'nalish ko'rsatish...
app.use('/authenc', authc);
app.use('/authoz', authz);
app.use('/crud', crud);
// qaysi muhitda ishlayotganini tekshirish...
if (app.get('env') == 'development') {
 app.use(morgan('tiny'));
 console.log('development ishlayapti..');
}

if (!config.get('jwtPrivateKey')) {
 console.error('Xavfli xatolik: registration_jwtPrivateKey aniqlanmagan');
 process.exit(1);
}

const port = process.env.PORT || 5000;
app.listen(port, function () {
 console.log(`${port} - portga ulanish amalga oshirildi...`);
});