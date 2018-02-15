import React, { Component } from 'react';


class ViewCake extends Component {

    constructor(){
        super();

        this.state = {
            pageTitle : 'Cake Details'
        }
    }

    componentWillMount(){
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


    render(){
        let cake = this.props.location.state.cake;

        return (
            <div className="container-fluid" ref="container">
                <h2>{this.state.pageTitle}</h2>
                <img src={cake.imageUrl} className="img-responsive rounded float-right" alt='Cake Image'/>
                <form>
                    <div className='form-group'>
                        <div className ='row'>
                            <div className='col-md-2 text-right'>
                                <label>Name</label>
                            </div>
                            <div className='col-md-5'>
                                {cake.name}
                            </div>
                        </div>
                    </div>
                    <div className='form-group'>
                        <div className ='row'>
                        <div className='col-md-2 text-right'>
                            <label>Comment</label>
                        </div>
                        <div className='col-md-5'>
                            {cake.comment}
                        </div>
                    </div>
                    </div>
                    <div className='form-group disabled'>
                        <div className ='row'>
                            <div className='col-md-2 text-right'>
                                Yum Factor : 
                            </div>
                            <div className='col-md-5'>
                                <div className="form-check">
                                <input className="form-check-input" onClick={this.radioClick} type="radio" name="radioYum" id="radioYum1" value="1" checked = {cake.yumFactor==1} />
                                <label className="form-check-label">1</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" onClick={this.radioClick} type="radio" name="radioYum" id="radioYum2" value="2" checked = {cake.yumFactor==2} />
                                <label className="form-check-label">2</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" onClick={this.radioClick} type="radio" name="radioYum" id="radioYum3" value="3" checked = {cake.yumFactor==3}/>
                                <label className="form-check-label">3</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" onClick={this.radioClick} type="radio" name="radioYum" id="radioYum4" value="4" checked = {cake.yumFactor==4} />
                                <label className="form-check-label">4</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" onClick={this.radioClick} type="radio" name="radioYum" id="radioYum5" value="5" checked = {cake.yumFactor==5} />
                                <label className="form-check-label">5</label>
                            </div>
                        </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default ViewCake;