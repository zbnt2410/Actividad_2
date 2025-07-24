const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Child = require('./child');

const Activity = sequelize.define('Activity', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.JSONB,
    allowNull: false
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  childId: {
    type: DataTypes.UUID,
    allowNull: false
  }
}, {
  timestamps: true
});

// Relaciones
Activity.belongsTo(Child, { foreignKey: 'childId' });
Child.hasMany(Activity, { foreignKey: 'childId' });

module.exports = Activity;