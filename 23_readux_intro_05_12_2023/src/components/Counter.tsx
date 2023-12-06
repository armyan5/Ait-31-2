import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from '../redux/store';

const Counter: React.FC = (): JSX.Element => {

   const counter = useSelector((state: RootState) =>state.counter.value);
   const dispatch = useDispatch();
    
    const handleMinus = () => {
        dispatch({type: 'counter/minus',payload: 1})
    }

    const handlePlus = () => {
        dispatch({type: 'counter/plus',payload: 1})
    }

     const Minus10 = () => {
         dispatch({type: 'counter/minus',payload: 10})
     }

     const Plus10 = () => {
        dispatch({type: 'counter/plus',payload:10})
     }

  return (
    <div>
        <div>Counter: {counter} </div>
        <button onClick={handleMinus}>Minus</button>
        <button onClick={handlePlus}>Plus</button>
        <button onClick={Minus10}>Minus-10</button>
        <button onClick={Plus10}>Plus+10</button>
        
    </div>
  )
}

export default Counter;

