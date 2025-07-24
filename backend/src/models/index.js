const sequelize = require('../config/database');
const User = require('./user');
const Child = require('./child');
const Activity = require('./activity');

const initDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ DB connected');
    await sequelize.sync({ alter: true }); // Sincroniza modelos
    console.log('✅ Models synchronized');
  } catch (error) {
    console.error('❌ DB error:', error);
  }
};

module.exports = { sequelize, initDB, User, Child, Activity };
