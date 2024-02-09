const User = require('../models/user');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.getAllUsers();
    res.json({ users });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.createUser(username, email, password);
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};