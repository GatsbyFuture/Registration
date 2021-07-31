// asosiy paketlardan obj olish...
const { Router } = require('express');
const contrAuthen = require('../controllers/authenticController');
const router = Router();

router.post('/api/person', contrAuthen.registration);

module.exports = router;