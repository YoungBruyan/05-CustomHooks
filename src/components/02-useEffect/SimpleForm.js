import React, { useEffect, useState } from 'react'

import './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name:'',
        email:''
    })

    const{name, email} = formState;
    
    useEffect(() => {
        // console.log('Hey!');
    },[]);
    
    useEffect(() => {
        // console.log('formState Cambio');
    },[formState]);

    useEffect(() => {
        // console.log('email Cambio');
    },[email]);

    const handleImputChange = ({target}) =>{

        setFormState({
            ...formState,
            [target.name]:target.value
        })
    }
    
    
    return (
        <>
          <h1>UseEffect</h1>
          <hr />
          <div className='form-group'>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={name}
                onChange={handleImputChange}
              />
          </div>
          <div className='form-group'>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value={email}
                onChange={handleImputChange}
              />
          </div>
          
          {(name === '123') && <Message />}
        </>
    )
}
