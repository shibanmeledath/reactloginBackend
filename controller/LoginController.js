
const User= require('../models/user');
const bcrypt = require('bcrypt');
const generateToken=require('./authController');

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if user exists
    let user = await User.findOne({ username });
    if (!user) {
      console.log("Invalid credentials")
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log("Invalid credentials")
      return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const token = generateToken(user.id);
    console.log('User logged in');

    // Respond with token
    res.status(200).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(400).json({message:'server error'});
  }
};

module.exports = login;
