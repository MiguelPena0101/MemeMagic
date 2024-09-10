const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Meme = sequelize.define('Meme', {
  topText: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  bottomText: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
},
{
  freezeTableName: true,
  underscored: true,
  modelName: 'Meme', 
});

module.exports = Meme;
