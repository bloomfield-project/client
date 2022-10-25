import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import "./InputField.css";


function InputField (props) {


        return (

            <Form.Group className="mb-4 col col-sm-3 ipm" controlId="formBasicIndexNumber">

                    <div className='ipm-row'>
                        <div><Form.Label className='ipm-1'>{props.label}</Form.Label></div>
<<<<<<< HEAD
                        <div><Form.Control defaultValue={props.value} type={props.type?props.type:"text"} className='ipm-2' placeholder={props.pc}/></div>
=======
                        <div><Form.Control type={props.type} className='ipm-2' placeholder={props.pc} min={props.min} max={props.max} defaultValue={props.default} /></div>
>>>>>>> 517665f382782abfe1dae4dda80a2c813025e8c5
                    </div>
                
            </Form.Group>

        );
    
}

export default InputField;