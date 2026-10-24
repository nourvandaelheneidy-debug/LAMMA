
const Event = require('../models/Event');

async function createEvent(eventData) {
  return await Event.create(eventData);
}

async function getAllEvents() {
  return await Event.findAll({
    order: [['createdAt', 'DESC']],
  });
}

async function getEventById(id) {
  return await Event.findByPk(id);
}

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
};
