import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../../../redux/Counter';

const ReduxStateManagement = () => {
  const { count } = useSelector(state=>state.counter)
  const dispatch = useDispatch();
  const {value, setValue} = useState()

  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={()=> dispatch(increment())} >Increment</button><br />
      <button onClick={()=> dispatch(decrement())}>Decrement</button><br />
      <input type="number" value={value} onChange={(e)=> handleChange(e)} />
    </div>
  )
}

export default ReduxStateManagement
