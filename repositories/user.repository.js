
const User = require('../models/User');

async function createUser(userData) {
  return await User.create(userData);
}

async function getUserById(id) {
  return await User.findByPk(id);
}

async function getUserByEmail(email) {
  return await User.findOne({
    where: { email },
  });
}

module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
};
