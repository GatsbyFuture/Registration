// asosiy paketlardan obj olish...
const { Router } = require('express');
const contrAuthen = require('../controllers/authorizController');
const router = Router();

router.post('/api/logins', contrAuthen.authorization);

module.exports = router;