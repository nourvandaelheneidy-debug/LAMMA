
const eventRepository = require('../repositories/event.repository');

async function createEvent(eventData) {
  return await eventRepository.createEvent(eventData);
}

async function getAllEvents() {
  return await eventRepository.getAllEvents();
}

async function getEventById(id) {
  return await eventRepository.getEventById(id);
}

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
};
