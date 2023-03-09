import React, { useState } from 'react';
import { PagingButton } from '../styles/authentication.styled'

function LoginComponent(){

    const[count, setCount] = useState(110)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    return(
        <div className="login">
            <h1 style={{ fontSize: '20px', fontWeight: '700', color: 'blue' }}>Count: {count}</h1>
            <PagingButton onClick={handleIncrement}>Increment</PagingButton><br />
            <PagingButton onClick={handleIncrement}>Decrement</PagingButton><br />
            <PagingButton type="reset" onClick={handleIncrement}>Reset</PagingButton>
        </div>
    )
}

export default LoginComponent;
