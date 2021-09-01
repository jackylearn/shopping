import * as actionTypes from '../constants/bookConstants.js'

export const getBooksReducer = (state = { books: [] }, action) => {
    switch (action.type) {
        case actionTypes.GET_BOOKS_REQUEST:
            return {
                loading: true,
                books: []
            }

        case actionTypes.GET_BOOKS_SUCCESS:
            return {
                loading: false,
                books: action.payload
            }

        case actionTypes.GET_BOOKS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}

export const getBookDetailsReducer = (state = { book: {} }, action) => {
    switch (action.type) {
        case actionTypes.GET_BOOK_DETAILS_REQUEST:
            return {
                loading: true,
            }
        case actionTypes.GET_BOOK_DETAILS_SUCCESS:
            return {
                loading: false,
                book: action.payload
            }
        case actionTypes.GET_BOOK_DETAILS_FAILURE:
            return {
                loading: false,
                error: action.payload
            }
        case actionTypes.GET_BOOK_DETAILS_RESET:
            return {
                book: {}
            }
        default:
            return state

    }
}

export const followBookReducer = (state = {}, action) => {
    // implement Set() in redux takes much work
    // use normal object instead
    switch (action.type) {
        case actionTypes.FOLLOW_BOOK:
            return {
                ...state,
                [action.payload]: true
            }
        case actionTypes.FOLLOW_BOOK_CANCEL:
            const { [action.payload]: unfollowedBook, ...rest } = state
            return rest
        default:
            return state
    }
}
