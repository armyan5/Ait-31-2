import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { RootState } from '../redux/store';

const Sandwich: React.FC = (): JSX.Element => {

    const sandwich = useSelector((state: RootState) => state.sandwich.value);
    const dispatch = useDispatch();

    const bread = () => {
        dispatch({type:'bread',payload: ' bread'})
    }

    const cheese = () => {
        dispatch({type:'cheese',payload: ' cheese'})
    }

    const sausage = () => {
        dispatch({type:'sausage',payload: ' sausage'})
    }
     


    return (
        <div>
            <div>Sandwich: {sandwich}</div>
            <button onClick={bread}>add bread</button>
            <button onClick={cheese}>add cheese</button>
            <button onClick={sausage}>add sausage</button>
        </div>
    )
}

export default Sandwich;