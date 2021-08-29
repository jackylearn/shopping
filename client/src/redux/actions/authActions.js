import * as actionTypes from '../constants/authConstants.js'
import axios from 'axios'

export const login = (name, password) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post('/auth/login', { name, password });
        dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: data
        })
        localStorage.setItem('user', JSON.stringify(getState().auth))
    } catch (err) {
        dispatch({
            type: actionTypes.LOGIN_FAILURE,
            payload: err.response && err.response.data.message
                ? err.response.data.message
                : err.message
        })
    }

}

export const logout = () => async (dispatch, getState) => {
    try {
        const { data } = await axios.get('/auth/logout');
        dispatch({
            type: actionTypes.LOGOUT_SUCCESS,
            payload: data
        })
        localStorage.setItem('user', JSON.stringify(getState().auth))

    } catch (err) {
        dispatch({
            type: actionTypes.LOGOUT_FAILURE,
            payload: err.response && err.response.data.message
                ? err.response.data.message
                : err.message
        })
    }
}

export const register = (name, password) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post('/auth/register', { name, password });
        dispatch({
            type: actionTypes.REGISTER_SUCCESS,
            payload: data
        })
        localStorage.setItem('user', JSON.stringify(getState().auth))
    } catch (err) {
        dispatch({
            type: actionTypes.REGISTER_FAILURE,
            payload: err.response && err.response.data.message
                ? err.response.data.message
                : err.message
        })
    }
}

export const updatePurchasedBooks = () => async (dispatch, getState) => {
    const userId = getState().auth.data.id
    const { data } = await axios.get(`/api/user/${userId}`)
    dispatch({
        type: actionTypes.UPDATE_PURCHASED_BOOKS,
        payload: data.purchased
    })
}