const express = require('express');
const { generateAudio } = require('../controllers/ttsController');
const router = express.Router();

router.post('/generate', generateAudio);

module.exports = router;
