const express = require('express');

const register=require('../controller/RegisterController');
const login=require('../controller/LoginController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);

module.exports = router;
