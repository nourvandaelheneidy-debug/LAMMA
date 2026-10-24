
function validateCreateEvent(req, res, next) {
  const { title, description, location, date } = req.body;

  if (
    typeof title !== 'string' || !title.trim() ||
    typeof description !== 'string' || !description.trim() ||
    typeof location !== 'string' || !location.trim() ||
    !date
  ) {
    return res.status(400).json({
      message: 'Title, description, location, and date are required',
    });
  }

  if (title.trim().length > 150) {
    return res.status(400).json({
      message: 'Title must not exceed 150 characters',
    });
  }

  if (location.trim().length > 200) {
    return res.status(400).json({
      message: 'Location must not exceed 200 characters',
    });
  }

  if (Number.isNaN(Date.parse(date))) {
    return res.status(400).json({
      message: 'Please provide a valid date',
    });
  }

  next();
}

module.exports = {
  validateCreateEvent,
};
