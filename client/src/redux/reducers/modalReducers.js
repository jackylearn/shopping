import * as actionTypes from '../constants/modalConstants.js'

export const modalReducer = (state = { login: false, register: false }, action) => {
    switch (action.type) {
        case actionTypes.OPEN_LOGIN_MODAL:
            return {
                login: true,
                register: false
            }
        case actionTypes.CLOSE_LOGIN_MODAL:
            return {
                ...state,
                login: false
            }
        case actionTypes.OPEN_REGISTER_MODAL:
            return {
                register: true,
                login: false
            }
        case actionTypes.CLOSE_REGISTER_MODAL:
            return {
                ...state,
                register: false
            }
        default:
            return state
    }
}