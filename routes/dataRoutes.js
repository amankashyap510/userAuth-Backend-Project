const express = require('express');
const router = express.Router();
const { getEntries } = require('../controllers/dataController');

router.get('/entries', getEntries);

module.exports = router;
