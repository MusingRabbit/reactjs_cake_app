import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router";
import Axios from 'axios'

class AddCake extends Component {
    constructor(){
        super();
        this.radioClick = this.radioClick.bind(this);
        this.btnSubmitClick = this.btnSubmitClick.bind(this);
        this.state = {
            apiUrl : "http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/",
            pageTitle : "Add Cake",
            cakeName : '',
            cakeComment : '',
            cakeImage : '',
            yumFactor : 1
        }
    }

    componentWillMount(){
        // Called the first time the component is loaded and added onto the page
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

    btnSubmitClick(e){
        e.preventDefault();

        var cake = {
            name : this.refs.txtName.value,
            comment : this.refs.txtComment.value,
            yumFactor : this.state.yumFactor,
            imageUrl :  this.refs.txtImageURL.value ? this.refs.txtImageURL.value : 'http://via.placeholder.com/300x300'
        }

        Axios.post(this.state.apiUrl+'cakes', cake)

        window.location = '/';
    }

    radioClick(e){
        this.setState({
            yumFactor : parseInt(e.target.value)
        })
    }

    render(){
        let yumfactor = this.state.yumFactor;

        return (
            <div className="container-fluid" ref="container">
                <h2>{this.state.pageTitle}</h2>

                <form>
                    <div className='form-group'>
                        <div className ='row'>
                            <div className='col-md-2 text-right'>
                                <label>Name</label>
                            </div>
                            <div className='col-md-5'>
                                <input type='text' id='txtName' ref='txtName' placeholder='Enter cake name'/>
                            </div>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className ='row'>
                        <div className='col-md-2 text-right'>
                            <label>Comment</label>
                        </div>
                        <div className='col-md-5'>
                            <input type='text' id='txtComment' ref='txtComment' placeholder='Enter comment'></input>
                        </div>
                    </div>
                    </div>
                    <div className='form-group'>
                        <div className ='row'>
                        <div className='col-md-2 text-right'>
                            <label>Image URL : </label>
                        </div>
                        <div className='col-md-5'>
                            <input type='text' id='txtImageURL' ref='txtImageURL' placeholder='Enter Image URL'></input>
                        </div>
                    </div>
                    </div>
                    <div className='form-group'>
                        <div className ='row'>
                            <div className='col-md-2 text-right'>
                                Yum Factor : 
                            </div>
                            <div className='col-md-5'>
                                <div className="form-check">
                                <input className="form-check-input" onClick={this.radioClick} type="radio" name="radioYum" id="radioYum1" value="1" checked = {yumfactor==1} />
                                <label className="form-check-label">1</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" onClick={this.radioClick} type="radio" name="radioYum" id="radioYum2" value="2" checked = {yumfactor==2} />
                                <label className="form-check-label">2</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" onClick={this.radioClick} type="radio" name="radioYum" id="radioYum3" value="3" checked = {yumfactor==3}/>
                                <label className="form-check-label">3</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" onClick={this.radioClick} type="radio" name="radioYum" id="radioYum4" value="4" checked = {yumfactor==4} />
                                <label className="form-check-label">4</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" onClick={this.radioClick} type="radio" name="radioYum" id="radioYum5" value="5" checked = {yumfactor==5} />
                                <label className="form-check-label">5</label>
                            </div>
                        </div>
                        </div>
                    </div>
                    <button id='btnSubmit' onClick={this.btnSubmitClick}>Add Cake</button>
                </form>
            </div>
        );
    }
}

export default AddCake;