import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from '../redux/storeRTK';
import { decrement, increment } from '../redux/counter/counterSlice';

const Counter: React.FC = (): JSX.Element => {

   const counter = useSelector((state: RootState) =>state.counter.value);
   const dispatch = useDispatch();
    
    const handleMinus = () => {
        dispatch(decrement(1))
       // dispatch({type: 'counter/minus',payload: 1})
    };

    const handlePlus = () => {
        dispatch(increment(1))
       // dispatch({type: 'counter/plus',payload: 1})
    };

     const handleMinus10 = () => {
        dispatch(decrement(10))
       //  dispatch({type: 'counter/minus',payload: 10})
     };

     const handlePlus10 = () => {
        dispatch(increment(10))
       // dispatch({type: 'counter/plus',payload:10})
     };

  return (
    <div className='divc'>
        <div className='divc1'>Counter: {counter} </div>
        <button className='bc1' onClick={handleMinus10}>Minus10</button>
        <button className='bc2' onClick={handleMinus}>Minus</button>
        <button className='bc3' onClick={handlePlus}>Plus</button>
        <button className='bc4' onClick={handlePlus10}>Plus10</button>
        
    </div>
  )
};

export default Counter;

