const express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/EmployeeController');

router.get('/list',EmployeeController.list);
router.post('/create',EmployeeController.create);
// router.get('/test',EmployeeController.test );
// router.post('/create',(req,res)=>{
//   res.json({
//     status:"Employeed saved "+JSON.stringify(req.body)
//   });
// })

module.exports = router;
