import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import axios from 'axios';

class EditComponent extends React.Component{

  constructor(props){
   super(props);
   this.state = {
     campName: "",
     campEmail:"",
     campPhone:"",
     campAddress:"",
     selectRole:0
   }
 }

 render(){
   return (
     <div>
       <div class="form-row justify-content-center">
         <div class="form-group col-md-6">
           <label for="inputPassword4">Name </label>
           <input type="text" class="form-control"  placeholder="Name" value={this.state.campName} onChange={(value)=> this.setState({campName:value.target.value})}/>
         </div>
         <div class="form-group col-md-6">
           <label for="inputEmail4">Email</label>
           <input type="email" class="form-control"  placeholder="Email" value={this.state.campEmail} onChange={(value)=> this.setState({campEmail:value.target.value})}/>
         </div>
       </div>
       <div class="form-row">
         <div class="form-group col-md-6">
           <label for="inputState">Role</label>
           <select id="inputState" class="form-control" onChange={(value)=> this.setState({selectRole:value.target.value})}>
             <option selected>Choose...</option>
             <option value="1">Admin...</option>
             <option value="2">Project Manager</option>
             <option value="3">Programer</option>
           </select>
         </div>
         <div class="form-group col-md-6">
           <label for="inputEmail4">Phone</label>
           <input type="number" class="form-control"  placeholder="Phone"  value={this.state.campPhone} onChange={(value)=> this.setState({campPhone:value.target.value})}/>
         </div>
       </div>
       <div class="form-group">
         <label for="inputAddress">Address</label>
         <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value={this.state.campAddress} onChange={(value)=> this.setState({campAddress:value.target.value})}/>
       </div>
       <button type="submit" class="btn btn-primary" onClick={()=>this.sendSave()}>Save</button>
     </div>
   );
 }

 sendSave(){

   /// por si no ha seleccionado nada de role
  if (this.state.selectRole==0) {
    alert("Seleccione el tipo de Role")
  }
  else if (this.state.campPhone=="") {
     alert("Digite el campo de telefono")
  }
  else if (this.state.campName=="") {
     alert("Digite el campo de Nombre")
  }
  else if (this.state.campEmail=="") {
     alert("Digite el campo de email")
  }
  else if (this.state.campAddress=="") {
     alert("Digite el campo de Direccion")
  }
  else {

    // url de backend
    const baseUrl = "http://localhost:3000/employee/create"

    // parametros de datos post
    const datapost = {
      name : this.state.campName,
      email : this.state.campEmail,
      phone : this.state.campPhone,
      address : this.state.campAddress,
      role  : this.state.selectRole
    }

    axios.post(baseUrl,datapost)
    .then(response=>{
      if (response.data.success===true) {
        alert(response.data.message)
      }
      else {
        alert(response.data.message)
      }
    }).catch(error=>{
      alert("Error 34 "+error)
    })

  }

}

}


export default EditComponent;
