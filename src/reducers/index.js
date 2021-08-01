import { combineReducers } from "redux";
import reducerMeat from './reducerMeat';
import reducerVegetable from './reducerVegatable'

const rootReducer = combineReducers ({
    reducerMeat,
    reducerVegetable,
})

export default rootReducer