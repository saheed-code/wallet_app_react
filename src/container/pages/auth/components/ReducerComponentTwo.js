import { useReducer } from 'react';
import { PagingButton } from '../styles/authentication.styled'

const initialStateTwo = {
    firstCount: 0,
    secondCount: 0
}

const reducerTwo = (state, action)=>{
    switch(action.type){
        case 'Increment':
            return {...state, firstCount: state.firstCount + action.value}
        case 'Decrement':
            return {...state, firstCount: state.firstCount - action.value} 
        case 'IncrementTwo':
            return {...state, secondCount: state.secondCount + action.value}
        case 'DecrementTwo':
            return {...state, secondCount: state.secondCount - action.value} 
        case 'Reset':
            return initialStateTwo
        default:
            return state          
    }
}

export function ReducerComponentTwo() {
    const [state, dispatch] = useReducer(reducerTwo, initialStateTwo)

    return(
        <div className="login">
            <h1 style={{ fontSize: '20px', fontWeight: '700', color: 'blue' }}>Count one: {state.firstCount}</h1>
            <h1 style={{ fontSize: '20px', fontWeight: '700', color: 'blue' }}>Count two: {state.secondCount}</h1>
            <PagingButton onClick={() => dispatch({type:'Increment', value: 1})}>Increment</PagingButton><br />
            <PagingButton onClick={() => dispatch({type: 'Decrement', value: 1})}>Decrement</PagingButton><br />
            <PagingButton onClick={() => dispatch({type:'Increment', value: 5})}>Increment by 5</PagingButton><br />
            <PagingButton onClick={() => dispatch({type: 'Decrement', value: 5})}>Decrement by 5</PagingButton><br />
            <PagingButton onClick={() => dispatch({type:'IncrementTwo', value: 1})}>Increment</PagingButton><br />
            <PagingButton onClick={() => dispatch({type: 'DecrementTwo', value: 1})}>Decrement</PagingButton><br />
            <PagingButton onClick={() => dispatch({type:'IncrementTwo', value: 5})}>Increment by 5</PagingButton><br />
            <PagingButton onClick={() => dispatch({type: 'DecrementTwo', value: 5})}>Decrement by 5</PagingButton><br />
            <PagingButton type="reset" onClick={() => dispatch({type: 'Reset'})}>Reset</PagingButton>
        </div>
    )
}
