
require('dotenv').config();

const express = require('express');
const sequelize = require('./config/database');
const User = require('./models/User');
const Event = require('./models/Event');
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const eventRoutes = require('./routes/event.routes');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/events', eventRoutes);

app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to LAMMA API!'
  });
});

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log('LAMMA database connected successfully!');

    await sequelize.sync();
    console.log('Database tables synchronized!');

    app.listen(PORT, () => {
      console.log(`LAMMA server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to start LAMMA:', error.message);
    process.exit(1);
  }
}

startServer();
