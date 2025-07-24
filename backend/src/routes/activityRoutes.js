const express = require('express');
const { createActivity } = require('../controllers/activityController');
const router = express.Router();

router.post('/generate', createActivity);

module.exports = router;
