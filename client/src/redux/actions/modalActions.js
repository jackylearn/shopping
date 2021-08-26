import * as actionTypes from '../constants/modalConstants.js'

export const openLoginModal = () => (dispatch) => {
    dispatch({
        type: actionTypes.OPEN_LOGIN_MODAL,
    })
}

export const closeLoginModal = () => (dispatch) => {
    dispatch({
        type: actionTypes.CLOSE_LOGIN_MODAL,
    })
}

export const openRegisterModal = () => (dispatch) => {
    dispatch({
        type: actionTypes.OPEN_REGISTER_MODAL,
    })
}

export const closeRegisterModal = () => (dispatch) => {
    dispatch({
        type: actionTypes.CLOSE_REGISTER_MODAL,
    })
}