// jwtni obj qilib chaqiramiz...
const jwt = require('jsonwebtoken');
// config filelini ham ochib qo'yamiz...
const config = require('config');
// xatolarni ushlash va boshqarish uchun obj 
const winston = require('winston');

async function authoMiddle(req, res, next) {
 const token = req.header('x-auth-token');
 if (!token)
  return res.status(401).send('Token bo\'lmaganligi sababli so\'rov rad edildi');

 try {
  const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
  req.user = decoded;
  next();
 } catch (ex) {
  return res.status(400).send('Yaroqsiz token!');
 }
}
async function adminUser(req, res, next) {
 if(!req.user.admin)
    return res.status(403).send('So\'rov rad etildi');
 next();
}
async function middleError(err, req , res ,next){
      winston.error(err.message , err);
      res.status(500).send('Serverga kutilmagan xatolik ro\'y berdi ...');
}
module.exports = {
 authoMiddle,
 adminUser,
 middleError
};
