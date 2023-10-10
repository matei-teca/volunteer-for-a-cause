const landingVolunteer = (state = false, action) => {
    switch (action.type){

        case 'LANDING_VOLUNTEER':
            return !state;

        default:
            return state
    }
}

export default landingVolunteer;