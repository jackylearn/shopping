import * as actionTypes from '../constants/authConstants.js'

export const authReducer = (state = { login: false }, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
        case actionTypes.REGISTER_SUCCESS:

            return {
                data: action.payload,
                login: true
            }
        case actionTypes.LOGOUT_SUCCESS:
            return {
                data: action.payload,
                login: false
            }


        case actionTypes.LOGIN_FAILURE:
        case actionTypes.REGISTER_FAILURE:
            return {
                error: action.payload
            }

        case actionTypes.UPDATE_PURCHASED_BOOKS:
            return {
                ...state,
                data: { ...state.data, purchasedBooks: action.payload }
            }

        default:
            return state
    }
}

