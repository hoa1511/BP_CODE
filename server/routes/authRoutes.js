const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

// Route đăng ký người dùng
router.post('/register', registerUser);

// Route đăng nhập người dùng
router.post('/login', loginUser);

module.exports = router;
