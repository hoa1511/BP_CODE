const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

// Tạo JWT
const generateToken = (userId) => {
  const secret = process.env.JWT_SECRET || 'hardcoded_secret_key';
  return jwt.sign({ userId }, secret, { expiresIn: '30d' });
};



// Đăng ký người dùng mới
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Kiểm tra xem người dùng đã tồn tại chưa
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Mã hóa mật khẩu
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Tạo người dùng mới
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    });

    // Tạo JWT token
    const token = generateToken(newUser.id);
    return res.status(201).json({ message: 'User created', token });
  } catch (error) {
    console.error('Error during user registration:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

// Đăng nhập
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Kiểm tra email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // So sánh mật khẩu
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Tạo JWT token
    const token = generateToken(user.id);
    return res.json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerUser, loginUser };
