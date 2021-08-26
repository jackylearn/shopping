import * as actionTypes from '../constants/authConstants.js'

export const authReducer = (state = { user: "", login: false }, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
        case actionTypes.REGISTER_SUCCESS:

            return {
                user: action.payload,
                login: true
            }
        case actionTypes.LOGOUT_SUCCESS:
            return {
                user: action.payload,
                login: false
            }


        case actionTypes.LOGIN_FAILURE:
        case actionTypes.REGISTER_FAILURE:
        case actionTypes.LOGOUT_FAILURE:
            return {
                error: action.payload
            }



        default:
            return state
    }
}

