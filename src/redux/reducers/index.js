import counterReducer from "./counter";

import { combineReducers } from "redux";
import loggedVReducer from "./isLoggedV";
import loggedRReducer from "./isLoggedR";

const allReducers = combineReducers({
    counter: counterReducer,
    isLoggedV: loggedVReducer,
    isLoggedR: loggedRReducer,
})

export default allReducers;