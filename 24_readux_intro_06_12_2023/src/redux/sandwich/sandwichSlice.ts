// import { PayloadAction, createSlice} from "@reduxjs/toolkit";


// const initialState = {
//     ingredients: ''
// }

// export const sandwichSlice = createSlice({
//     name:'sandwich',
//     initialState,
//     reducers: {
//         increment: (state,action: PayloadAction<string>) => {     IM ARAC TNAYIN 
//             state.ingredients += action.payload
//         },
//         decrement: (state,action:PayloadAction<string>) => {
//             state.ingredients = ''  
            
//         },

//     }
// })

// export const {increment,decrement} = sandwichSlice.actions;
// export default sandwichSlice.reducer;

import {PayloadAction, createSlice} from "@reduxjs/toolkit";

const initialState ={
    ingredients: ''
}

export const sandwichSlice = createSlice({
    name:'sandwich',
    initialState,
    reducers: {
        addIngredient:(state,action: PayloadAction<string>) => {
            state.ingredients += action.payload;

        },

        clear: (state) => {
            state.ingredients = '';
        }

    }
})

export const{addIngredient,clear} = sandwichSlice.actions;
export default sandwichSlice.reducer;