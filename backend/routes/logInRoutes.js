const express = require('express');
const authUser = require('../controllers/authController');
const router = express.Router();

router.post('/', authUser)

module.exports = router;