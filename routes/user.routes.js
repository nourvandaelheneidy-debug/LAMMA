
const express = require('express');

const authenticateToken = require('../middleware/auth.middleware');
const { getMyProfile } = require('../controllers/user.controller');

const router = express.Router();

router.get('/me', authenticateToken, getMyProfile);

module.exports = router;
