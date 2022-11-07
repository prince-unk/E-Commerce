import { ADD_TO_CART } from "../Constants";

const initialState = {
    CardData : []
}

export default function cardItems(state = [],action) {
    switch(action.type) {
        case ADD_TO_CART:
            console.log(action);
            return [
                ...state,
                {CardData:action.data}
            ]
            default:
                return state
    }    
}