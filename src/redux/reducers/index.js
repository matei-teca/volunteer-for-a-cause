import counterReducer from "./counter";

import { combineReducers } from "redux";
import landingVolunteer from "./landingVolunteer";
import landingRecruiter from "./landingRecruiter";

const allReducers = combineReducers({
    counter: counterReducer,
    landingVolunteer: landingVolunteer,
    landingRecruiter: landingRecruiter,
})

export default allReducers;