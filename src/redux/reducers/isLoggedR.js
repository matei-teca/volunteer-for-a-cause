const loggedRReducer = (state = false, action) => {
    switch (action.type){

        case 'SIGN_IN_R':
            return !state;

        default:
            return state
    }
}

export default loggedRReducer;