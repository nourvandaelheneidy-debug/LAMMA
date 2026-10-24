
require('dotenv').config();

const sequelize = require('./config/database');

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('LAMMA database connected successfully!');
  } catch (error) {
    console.error('Database connection failed:', error.message);
  } finally {
    await sequelize.close();
  }
}

testConnection();
