const controllers = {}

// import model and sequelize
var sequelize = require('../model/database');
var Employee = require('../model/Employee');
var Role = require('../model/Role');

// para migrar por si no tiene tablas
sequelize.sync()

controllers.delete = async (req,res) => {

  // parameter post
  const { id } = req.body;
  // delete sequelize
  const del = await Employee.destroy({
    where: { id: id }
  })
  res.json({success:true, deleted:del, message:"Deleted successful"});

}

controllers.update = async (req, res) => {
  // parameter id get
  const { id } = req.params;
  // parameter post
  const { name, email, phone, address, role } = req.body;
  // update data
  const data = await Employee.update({
    name: name,
    email:email,
    address:address,
    phone:phone,
    roleId:role
  },{
    where: { id: id}
  })
  .then( function (data){
    return data;
  })
  .catch(error => {
    return error;
  })

  res.json({ success:true, data: data, message: "Updated successful"});

}

controllers.get = async (req, res) => {
  const { id } = req.params;
  const data = await Employee.findAll({
    where: { id: id},
    include: [ Role ]
  })
  .then( function(data){
    return data;
  })
  .catch(error => {
    return error;
  })
  res.json({success:true, data:data});
}

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
