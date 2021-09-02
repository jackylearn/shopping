import * as actionTypes from '../constants/authConstants.js'
import axios from 'axios'

export const login = (name, password) => async (dispatch, getState) => {
    try {
        const { data: user } = await axios.post('/auth/login', { name, password });
        const { data: userDetails } = await axios.get(`/api/user/${user.id}`)
        dispatch({
            type: actionTypes.LOGIN_SUCCESS,
            payload: {
                ...user,
                purchasedBooks: userDetails.purchased,
                followedBooks: userDetails.follow
            }
        })
        localStorage.setItem('user', JSON.stringify(getState().auth))
    } catch (err) {
        dispatch({
            type: actionTypes.LOGIN_FAILURE,
            payload: 'Invalid username or password'
        })
    }

}

export const logout = () => async (dispatch, getState) => {
    const { data } = await axios.get('/auth/logout');
    dispatch({
        type: actionTypes.LOGOUT_SUCCESS,
        payload: data
    })
    localStorage.setItem('user', JSON.stringify(getState().auth))
    localStorage.removeItem('cart')
    localStorage.removeItem('follow')
}

export const register = (name, password) => async (dispatch, getState) => {
    try {
        const { data } = await axios.post('/auth/register', { name, password });

        if (data.error) throw new Error(data.error)
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

export const followBook = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.FOLLOW_BOOK,
        payload: id
    })
    localStorage.setItem('follow', JSON.stringify(getState().followedBooks))

    const userId = getState().auth.data.id
    axios.put(`/api/user/${userId}/followedBooks`, { followedBooks: [id, true] })
}

export const followBookCancel = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.FOLLOW_BOOK_CANCEL,
        payload: id
    })
    localStorage.setItem('follow', JSON.stringify(getState().followedBooks))
    const userId = getState().auth.data.id
    axios.put(`/api/user/${userId}/followedBooks`, { followedBooks: [id, false] })
}