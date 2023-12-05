import Action from "./sandwichActions";
import { ISandwichState } from "./sandwichState";

const initialState: ISandwichState = {
    value: ''
}

export default function sandwichReducer (
    state = initialState,
    action: Action
    ): ISandwichState {

        switch (action.type) {
            case "bread":
                return{...state,value: state.value + action.payload};
            case "cheese":
                return{...state,value: state.value + action.payload};
            case "sausage":
                return{...state,value: state.value + action.payload};

                default:
                    return state;
        }

    }
