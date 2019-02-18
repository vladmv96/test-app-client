const initialState = {
    name: 'Аноним',
}

export function userReducer(state = initialState, action) {

    switch (action.type) {
        case 'SET_USERNAME':
            return {...state, username: action.payload}
        default:
            return state
    }
    
}