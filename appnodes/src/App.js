import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

 import Form from './module/form';
 import List from './module/list';
 import Edit from './module/edit';

function App() {

  return (
    <Router>
      <div className="App">

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="https://www.tutofox.com/" style={{color:'orange',fontWeight:'bold'}}>tutofox.com</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link"  to="/"> Employee List </Link>
              </li>
            </ul>
            <Link class="btn btn-info "  to="/form" >Add Employee</Link>
          </div>
        </nav>

        <div class="container py-4">
          <div class="row">

            <Route path="/" exact component={List} />
            <Route path="/form" component={Form} />
            <Route path="/edit/:id" component={Edit} />

          </div>
        </div>

      </div>
    </Router>

  );
}

export default App;
