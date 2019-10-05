const controllers = {}

// import model and sequelize
var sequelize = require('../model/database');
var Employee = require('../model/Employee');
var Role = require('../model/Role');

// para migrar por si no tiene tablas
sequelize.sync()

controllers.list = async (req,res) => {
  const data = await Employee.findAll({
    include: [ Role ]
  })
  .then(function(data){
    return data;
  })
  .catch(error =>{
    return error;
  })
  res.json({ success: true, data:data });
}

controllers.create = async (req,res) => {

  // DATA parametros desde post
  const {name, email, address, phone, role } = req.body;
  console.log("ROle es ==>"+role)
  //create
  const data = await Employee.create({
    name:name,
    email:email,
    address:address,
    phone:phone,
    roleId:role
  })
  .then(function(data){
    return data;
  })
  .catch(error=>{
    console.log(error)
    return error;
  })
  // return res
  res.status(200).json({
    success:true,
    message:"Guardo exitosamente",
    data:data
  })

}


module.exports = controllers;
