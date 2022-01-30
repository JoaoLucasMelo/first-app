import React, { Component } from 'react';

class IncreaseComponent extends Component {
    state = { 
        startingNumber: 0
     } 

     handleIncrement = () => {
        console.log('Clicked +')
        this.setState({ startingNumber: this.state.startingNumber + 1 })
     }

     handleDecrement = () => {
        console.log('Clicked -')
        this.setState({ startingNumber: this.state.startingNumber - 1})
     }

    render() { 
        return (
            <div className='p-3'>
                <h1>Increase Button Test</h1>
                <div className='d-flex align-items-center'>
                    <p className='p-2 m-0 fs-2'>{ this.state.startingNumber }</p>
                    <button onClick={this.handleIncrement} className='btn btn-danger ms-3'><i className='mdi mdi-24px mdi-plus'></i></button>
                    <button onClick={this.handleDecrement} disabled={this.state.startingNumber === 0 ? 'disabled' : ''} className='btn btn-dark ms-3'><i className='mdi mdi-24px mdi-minus'></i></button>
                </div>
            </div>
        );
    }
}
 
export default IncreaseComponent;