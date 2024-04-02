const express = require('express');
const router = express.Router();
const { getMessage } = require('../controllers/secureController');

router.get('/message', getMessage);

module.exports = router;
