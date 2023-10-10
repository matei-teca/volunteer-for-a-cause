const landingRecruiter = (state = false, action) => {
    switch (action.type){

        case 'LANDING_RECRUITER':
            return !state;

        default:
            return state
    }
}

export default landingRecruiter;