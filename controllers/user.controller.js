
const userRepository = require('../repositories/user.repository');

async function getMyProfile(req, res) {
  try {
    const user = await userRepository.getUserById(req.user.id);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    return res.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
      },
    });
  } catch (error) {
    console.error('Get profile error:', error.message);

    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}

module.exports = {
  getMyProfile,
};
