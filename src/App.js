import React, { Component } from 'react';
import Axios from 'axios'
import './App.css';
import ViewCakes from './ViewCakes'
import AddCake from './AddCake'
import ViewCake from './ViewCake'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
    constructor(){
      super();
    }

    render() {
      return (
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
    
          <hr />
    
          <Route exact path="/" component={ViewCakes} />
          <Route exact path="/addCake" component={AddCake} />
          <Route exact path="/viewCake" component={ViewCake} />
        </div>
      </Router>
      );
    }
}

export default App;
