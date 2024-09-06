const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Meme = require('./Meme');
const Template = require('./Template');
const User = require('./User');

// Define relationships here
User.hasMany(Meme, { foreignKey: 'userId' });
Meme.belongsTo(User, { foreignKey: 'userId' });

Template.hasMany(Meme, { foreignKey: 'templateId' });
Meme.belongsTo(Template, { foreignKey: 'templateId' });

module.exports = {
  sequelize,
  Meme,
  Template,
  User,
};