import counterReducer from "./counter";

import { combineReducers } from "redux";
import loggedVReducer from "./isLoggedV";
import landingRecruiter from "./landingRecruiter";

const allReducers = combineReducers({
    counter: counterReducer,
    isLoggedV: loggedVReducer,
    landingRecruiter: landingRecruiter,
})

export default allReducers;