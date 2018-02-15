import React, { Component } from 'react';
import CakeComponent from './CakeComponent'
import Axios from 'axios'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddCake from './AddCake'
import ViewCake from './ViewCake'

class ViewCakes extends Component {
    constructor(){
        super();

        this.getCakes = this.getCakes.bind(this);

        this.state = {
            pageTitle : "View Cakes",
            apiUrl : "http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/",
            cakes : []
        }
    }

    getCakes(response){
        this.setState({
            cakes : response.data
        });
    }

    componentWillMount(){
    // Called the first time the component is loaded and added onto the page
    Axios.get(this.state.apiUrl + 'cakes').then(this.getCakes);
    }

    componentDidMount(){
    // Called after the component has been rendered onto the page
    }

    componentWillReceiveProps(nextProps){
    // Called when properties have been set/changed for this component.
    }

    componentWillUpdate(nextProps, nextState){
    // Called when the properties and/or state has changed
    }

    componentWillUnmount(){
    // Called when the component will be unloaded/removed from page
    }

    render() {

        let cakes = this.state.cakes;
    
        return (
            <div className="container-fluid" ref="container">
              <div>
                <h2>{this.state.pageTitle}</h2>
              </div>
              
              <div className='row'>
                <div className='col-md-8'>
                  <p>Here you can view a list of all available cakes!</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus, odio ut tincidunt eleifend, magna sem sodales orci, nec ultrices metus libero ut tellus. Cras maximus tellus nec ante tempus malesuada. Cras a felis vel quam lobortis vehicula a ultricies urna. Nullam imperdiet maximus lectus et mollis. Duis quis blandit mi, eget gravida lectus. Nullam sagittis id urna a sodales. Curabitur vel egestas enim.</p>
                  <p>Sed facilisis dolor at nisi cursus, quis facilisis nunc rhoncus. Cras rhoncus, nulla a iaculis interdum, mauris lacus venenatis erat, ac malesuada turpis sem nec massa. Ut aliquet sapien tellus, in tempus sapien aliquet at. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec interdum condimentum dapibus. Mauris laoreet lorem quis nibh tincidunt molestie. Sed consequat pharetra augue id dictum.</p>
                  <p> Click <Link to = "/addCake"> here </Link> to add a new cake!</p>
                </div>
                <div className='col-md-3'>
                  <div>
                  {cakes.map(x=> <Link to = {{pathname : '/viewCake', state : {cake : x}}}> <CakeComponent key={x.id} cake = {x}/> </Link>)} </div>
                </div>
    
              </div>
            </div>
        );
      }
}

export default ViewCakes;