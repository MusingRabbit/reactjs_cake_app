import React, { Component } from 'react';
import Axios from 'axios'
import './App.css';
import ViewCakes from './ViewCakes'
import AddCake from './AddCake'
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
        </div>
      </Router>
      );
    }
}

export default App;
