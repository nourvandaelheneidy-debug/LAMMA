
const {
  createEvent,
  getAllEvents,
} = require('../services/event.service');

async function createEventController(req, res) {
  try {
    const { title, description, location, date } = req.body;

    if (!title || !description || !location || !date) {
      return res.status(400).json({
        message: 'Title, description, location, and date are required',
      });
    }

    const event = await createEvent({
      title: title.trim(),
      description: description.trim(),
      location: location.trim(),
      date,
    });

    return res.status(201).json({
      message: 'Event created successfully',
      event,
    });
  } catch (error) {
    console.error('Create event error:', error.message);

    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}
async function getAllEventsController(req, res) {
  try {
    const events = await getAllEvents();

    return res.status(200).json({
      message: 'Events retrieved successfully',
      events,
    });
  } catch (error) {
    console.error('Get events error:', error.message);

    return res.status(500).json({
      message: 'Internal server error',
    });
  }
}

function organizerDashboard(req, res) {
  return res.status(200).json({
    message: 'Welcome to the organizer dashboard!',
    userId: req.user.id,
    role: req.user.role,
  });
}
module.exports = {
  createEventController,
  getAllEventsController,
  organizerDashboard,
};

