import { combineReducers } from "redux";
import { navReducer } from "./navReducer";

const reducers = combineReducers({
    navReducer : navReducer
})

export default reducers;

