
import {useDispatch, useSelector} from 'react-redux'
import {increment,decrement,reset,incrementByAmount} from './counterSlice'

import {useState} from 'react'

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const [amount,setAmount] = useState(0)
  const addAmountValue = Number(amount) || 0;

  const resetAll = () => {
    setAmount(0)
    dispatch(reset())
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={()=> dispatch(increment())}>+</button>  
      <button onClick={()=> dispatch(decrement())}>-</button>  
      <button onClick={()=> dispatch(resetAll())}>reset</button>  
      <div>
        <input type="text" value={amount} onChange={(e)=> setAmount(e.target.value)}/>
        <button onClick={()=> dispatch(incrementByAmount(addAmountValue))}>add value</button>
      </div>
    </>
  )
}

export default Counter