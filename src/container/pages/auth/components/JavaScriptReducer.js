import { useReducer } from 'react';
import { PagingButton } from '../styles/authentication.styled'

let arr = Array(10)

arr[0] = 13
arr[1] = 6
arr[2] = 1
arr[3] = 7
arr[4] = 8
arr[5] = 4
arr[6] = 3
arr[7] = 2
arr[8] = 5
arr[9] = 6
console.log(arr);

const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(sum);

const initialState = 0

const reducer = (state, action)=>{
    switch(action){
        case 'Increment':
            return state + 1
        case 'Decrement':
            return state - 1  
        case 'Reset':
            return initialState
        default:
            return state          
    }
}

export function ReducerComponent() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <div className="login">
            <h1 style={{ fontSize: '20px', fontWeight: '700', color: 'blue' }}>Count: {state}</h1>
            <h1 style={{ fontSize: '20px', fontWeight: '700', color: 'blue' }}>Count Two: {state}</h1>
            <PagingButton onClick={() => dispatch('Increment')}>Increment</PagingButton><br />
            <PagingButton onClick={() => dispatch('Decrement')}>Decrement</PagingButton><br />
            <PagingButton onClick={() => dispatch('IncrementTwo')}>Increment Tw0</PagingButton><br />
            <PagingButton onClick={() => dispatch('DecrementTwo')}>Decrement Two</PagingButton><br />
            <PagingButton type="reset" onClick={() => dispatch('Reset')}>Reset</PagingButton>
        </div>
    )
}


