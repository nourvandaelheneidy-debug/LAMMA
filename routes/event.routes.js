
const express = require('express');

const authenticateToken = require('../middleware/auth.middleware');
const authorizeRole = require('../middleware/authorizeRole');
const {
  createEventController,
  getAllEventsController,
  organizerDashboard,
} = require('../controllers/event.controller');

const router = express.Router();
router.get('/', getAllEventsController);
// Organizer dashboard
router.get(
  '/organizer/dashboard',
  authenticateToken,
  authorizeRole('organizer'),
  organizerDashboard
);

// Create a new event
router.post(
  '/',
  authenticateToken,
  authorizeRole('organizer'),
  createEventController
);

module.exports = router;
