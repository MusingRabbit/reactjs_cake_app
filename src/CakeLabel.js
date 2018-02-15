import React, { Component } from 'react';

class CakeLabel extends Component {

    constructor(){
        super();

        this.state = {
            cake : {}
        }
    }

    componentWillMount(){
        this.setState({
            cake : this.props.cake
          });
    }

    render() {
        let cake = this.state.cake;
        return (
              <div key={cake.id}>
                <div className='text-left'>
                  <div className='panel panel-default'>
                    <div className='panel-heading'/>
                      {cake.name}
                    </div>
                    <div className='panel-body col-md-9'>
                        <img src={cake.imageUrl} className="img-fluid rounded float-right" alt='Cake Image'/>
                    </div>
                  </div>
                  </div>
            )
          }
    }

export default CakeLabel;