const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'machine_test',   
  'root',           
  'root', 
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;
