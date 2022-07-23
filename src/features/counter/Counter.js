
import {useDispatch, useSelector} from 'react-redux'
import {increment,decrement} from './counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  console.log(decrement,increment);

  return (
    <>
      <div>{count}</div>
      <button onClick={()=> dispatch(increment())}>+</button>  
      <button onClick={()=> dispatch(decrement())}>-</button>  
    </>
  )
}

export default Counter