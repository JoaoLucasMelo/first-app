import React, { Component } from 'react';

class FormTest extends Component {
    state = { 
        userInput: { name: '', email: ''}
     } 

    handleSubmit = e => {
        e.preventDefault()
        console.log('Submitted', this.state.userInput)
        this.setState( this.state.userInput = { email: '', name: '' })
    }

    handleChange = e => {
        let userInput = { ...this.state.userInput }
        userInput[e.currentTarget.name] = e.currentTarget.value
        this.setState({ userInput })
    }

    render() { 
        return (
            <div className='p-3'>
                <h1>Form Test</h1>
                <form className='form-control' onSubmit={this.handleSubmit}>
                    <label htmlFor="name" className='form-label'>Name:</label>
                    <input value={this.state.userInput.name} onChange={this.handleChange} type="text" className='form-control' name="name" id="name" />
                    <label htmlFor="email" className='form-label'>Email:</label>
                    <input value={this.state.userInput.email} onChange={this.handleChange} type="email" className='form-control' name="email" id="email" />
                    <button  className='btn btn-primary mt-3'>Submit (Console Log)</button>
                </form>

            </div>
        );
    }
}
 
export default FormTest;