// asosiy paketlardan obj olish...
const { Router } = require('express');
// controllerda obj olib olamiz foydalanish uchun...
const crudcontroller = require('../controllers/CruddbController');
// class ochamiz control qilish uchun...
const {authoMiddle, adminUser } = require('../midlleware/authoriz');

const router = Router();

router.get('/api/users',authoMiddle, crudcontroller.readAll);
router.get('/api/user/:id', crudcontroller.readId);
router.get('/api/person',authoMiddle,crudcontroller.person);
router.put('/api/users/update', crudcontroller.updateId);
router.delete('/api/user/delete/:id',[authoMiddle,adminUser],crudcontroller.deleteUserId);

module.exports = router;