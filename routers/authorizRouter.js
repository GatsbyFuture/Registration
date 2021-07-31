// asosiy paketlardan obj olish...
const { Router } = require('express');
const contrAuthen = require('../controllers/authorizController');
const router = Router();

router.get('/api/sourch', contrAuthen.authorization);

module.exports = router;