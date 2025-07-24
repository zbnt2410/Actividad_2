const express = require('express');
const { createChild, getAllChildren  } = require('../controllers/childController');
const router = express.Router();

router.post('/create', createChild);
router.get('/', getAllChildren);

module.exports = router;