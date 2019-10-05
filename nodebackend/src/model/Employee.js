const Sequelize = require('sequelize');
var sequelize = require('./database');
// import Role for FK roleId
var Role = require('./Role');
// name table
var nametable = 'empleado';

var Employee = sequelize.define(nametable,{

  id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
  name:  Sequelize.STRING,
  email: Sequelize.STRING,
  address: Sequelize.STRING,
  phone: Sequelize.BIGINT,
  // LLAVE FORANEA
  roleId:{
    type: Sequelize.INTEGER,
    // this is a refence to another model
    refences: {
      model: Role,
      key: 'id'
    }
  }
})

Employee.belongsTo(Role);

module.exports = Employee
