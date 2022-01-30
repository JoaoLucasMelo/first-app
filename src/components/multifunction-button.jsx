import React, { Component } from 'react';
import { useAlert } from 'react-alert'

const ButtonComponent = (props) => {
    const alert = useAlert()

        return (
            <div className='mx-3 my-2'>
                <button onClick={ () => {alert.show(props.alertText)}}  style={{ backgroundColor: props.color}} className='border-0 btn btn-primary'>
                    {props.buttonName}
                </button>
            </div>
        );
    }

export default ButtonComponent;