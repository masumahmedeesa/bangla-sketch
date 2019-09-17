const Sequelize = require("sequelize");

const sequelize = require("../utility/database");

const Research = sequelize.define('research', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  author: {
    type: Sequelize.STRING,
    allowNull: false
  },
  filesCount: {
    type: Sequelize.STRING
  },
  filesSize: {
    type: Sequelize.STRING
  },
  imageUrl: Sequelize.STRING
});

module.exports = Research;
