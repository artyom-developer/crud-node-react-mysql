const controllers = {}

// import model and sequelize
var sequelize = require('../model/database');
var Employee = require('../model/Employee');
var Role = require('../model/Role');


controllers.testdata = async (req, res) => {

  const response = await sequelize.sync().then(function(){

    // create role
    // Role.create({
    //   role:'Admin'
    // });
    //create employee
    Employee.create({
      name: 'Johanna Mar',
      email: 'juana@mail.com',
      address: 'Malibu Cr 10 No 54',
      phone: '1234567890',
      roleId: 1
    });

    // llamar todos los datos del empleado
    const data = Employee.findAll();
    return data;
  })
  .catch(error => {
    return error;
  });

  res.json({success : true, data : response});

}

controllers.test = ( req, res) => {

  const data = {
    name: "John Smith",
    age: 24,
    city: "Madrid"
  }

  console.log("Execute from controllers employee")
  res.json(data);

}

module.exports = controllers;
