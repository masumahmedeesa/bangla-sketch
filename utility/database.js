
const Sequelize = require('sequelize');

const sequelize = new Sequelize('banglaSketch','root','01786122963',{
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;