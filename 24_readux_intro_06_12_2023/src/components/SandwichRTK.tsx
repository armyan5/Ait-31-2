import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/storeRTK';
import { addIngredient, clear } from '../redux/sandwich/sandwichSlice';


const Sandwich: React.FC = (): JSX.Element => {

   const ingredients = useSelector((state: RootState) => state.sandwich.ingredients);
   const dispatch =useDispatch();

   const handleAddBread = (): void => {
    dispatch(addIngredient(' bread'))
    // dispatch({ type: 'sandwich/addIngredient',payload: 'bread'});
   }
   const handleAddCheese = (): void => {
    dispatch(addIngredient(' cheese'))

    // dispatch({type: 'sandwich/addIngredient',payload: 'cheese'})
   }
   const handleAddSalami = (): void => {
    dispatch(addIngredient(' salami'))
    // dispatch({type: 'sandwich/addIngredient',payload: 'salami'})
   }
   const handleDelete = (): void => {
    dispatch(clear())
    // dispatch({type: 'sandwich/clear'})
   }



  return (
    <div className='div1'>
       <h1 className='sand'>Choose your sandwich:</h1>
       <p className='pars'>Sandwich: {ingredients}</p>
       <button className='but1' onClick={handleAddBread}>Add bread</button>
       <button className='but2' onClick={handleAddCheese}>Add cheese</button>
       <button className='but3' onClick={handleAddSalami}>Add salami</button>
       <button className='but4' onClick={handleDelete}>Delete all ingredients</button>
    </div>

  )
}

export default Sandwich