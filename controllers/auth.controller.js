
const {
  registerUser,
  loginUser,
} = require('../services/auth.service');


async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required',
      });
    }

    const result = await loginUser({
      email: email.trim().toLowerCase(),
      password,
    });

    return res.status(200).json({
      message: 'Login successful',
      user: result.user,
      token: result.token,
    });
  } catch (error) {
    if (error.message === 'Invalid email or password') {
      return res.status(401).json({
        message: 'Invalid email or password',
      });
    }

    console.error('Login error:', error.message);

    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}

async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'Name, email, and password are required',
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: 'Password must be at least 8 characters long',
      });
    }

    const user = await registerUser({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      password,
    });

    return res.status(201).json({
      message: 'User registered successfully',
      user,
    });
  } catch (error) {
    if (error.message === 'Email is already registered') {
      return res.status(409).json({
        message: error.message,
      });
    }

    console.error('Registration error:', error.message);

    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}

module.exports = {
  register,
  login,
};