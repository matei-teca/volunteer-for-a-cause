const loggedVReducer = (state = false, action) => {
    switch (action.type){

        case 'SIGN_IN_V':
            return !state;

        default:
            return state
    }
}

export default loggedVReducer;