import * as actionTypes from '../constants/bookConstants.js'
import axios from 'axios'

export const getBooks = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: actionTypes.GET_BOOKS_REQUEST
        })

        const { data } = await axios.get('/api/books')
        dispatch({
            type: actionTypes.GET_BOOKS_SUCCESS,
            payload: data
        })

        const now = new Date()
        localStorage.setItem('books', JSON.stringify({
            value: getState().getBooks.books,
            expire: now.getTime() + 60 * 10 * 1000
        }))

    } catch (err) {
        dispatch({
            type: actionTypes.GET_BOOKS_FAILURE,
            payload: err.response && err.response.data.message
                ? err.response.data.message
                : err.message
        })
    }
}

export const getBookDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({
            type: actionTypes.GET_BOOK_DETAILS_REQUEST
        })

        const { data } = await axios.get(`/api/books/${id}`)
        dispatch({
            type: actionTypes.GET_BOOK_DETAILS_SUCCESS,
            payload: data
        })
        localStorage.setItem('book', JSON.stringify(getState().getBookDetails.book))
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
