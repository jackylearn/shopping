import * as actionTypes from '../constants/bookConstants.js'
import axios from 'axios'

export const getBooks = () => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_BOOKS_REQUEST
        })

        const { data } = await axios.get('/api/books')
        dispatch({
            type: actionTypes.GET_BOOKS_SUCCESS,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: actionTypes.GET_BOOKS_FAILURE,
            payload: err.response && err.response.data.message
                ? err.response.data.message
                : err.message
        })
    }
}

export const getBookDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: actionTypes.GET_BOOK_DETAILS_REQUEST
        })

        const { data } = await axios.get(`/api/books/${id}`)
        dispatch({
            type: actionTypes.GET_BOOK_DETAILS_SUCCESS,
            payload: data
        })

    } catch (err) {
        dispatch({
            type: actionTypes.GET_BOOK_DETAILS_FAILURE,
            payload: err.response && err.response.data.message
                ? err.response.data.message
                : err.message
        })
    }
}

export const removeBookDetails = () => (dispatch) => {
    dispatch({
        type: actionTypes.GET_BOOK_DETAILS_RESET
    })
}

export const followBook = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.FOLLOW_BOOK,
        payload: id
    })
    localStorage.setItem('follow', JSON.stringify(getState().followedBooks))

}

export const followBookCancel = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.FOLLOW_BOOK_CANCEL,
        payload: id
    })
    localStorage.setItem('follow', JSON.stringify(getState().followedBooks))
}
