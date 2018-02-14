import React, { Component } from 'react';
import Axios from 'axios'
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.getCakes = this.getCakes.bind(this);

    this.state = {
      pageTitle : "It's all about cakes!",
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

      <div className="App">
        <form ref="cakeForm">
          <div className="container-fluid" ref="container">
            <div>
              <h1>{this.state.pageTitle}</h1>
            </div>
            <div>{
              cakes.map(x=> 
                <div key={x.id} className="row">
                  <div className='col-md-3  text-left'>
                    <div className='panel panel-default'>
                      <div className='panel-heading'/>
                        {x.name}
                      </div>
                      <div className='panel-body'/>
                          <img src={x.imageUrl} className="img-responsive rounded float-right"/>
                      </div>
                    </div>
              )
            }
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
