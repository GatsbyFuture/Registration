// asosiy paketlardan obj olish...
const { Router } = require('express');
// controllerda obj olib olamiz foydalanish uchun...
const crudcontroller = require('../controllers/CruddbController');
const router = Router();

router.get('/api/users', crudcontroller.readAll);
router.get('/api/user/:id' , crudcontroller.readId);
// router.post('/api/logins');
router.put('/api/users/update', crudcontroller.updateId);
// router.delete('/api/user/:id');

module.exports = router;