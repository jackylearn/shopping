import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"

// reducers
import { cartReducer, checkoutReducer } from './reducers/cartReducers.js'
import { getBooksReducer, getBookDetailsReducer, followBookReducer } from './reducers/bookReducers.js'
import { authReducer } from './reducers/authReducers.js'
import { modalReducer } from './reducers/modalReducers.js'

const reducer = combineReducers({
    cart: cartReducer,
    payment: checkoutReducer,
    getBooks: getBooksReducer,
    getBookDetails: getBookDetailsReducer,
    followedBooks: followBookReducer,
    auth: authReducer,
    modal: modalReducer,
})

const middleware = [thunk]

const now = new Date()
const cartFromLocalStorage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : {}
const bookFromLocalStorage = localStorage.getItem('books')
    && JSON.parse(localStorage.getItem('books')).expire > now.getTime()
    ? JSON.parse(localStorage.getItem('books')).value
    : []

const currentBookFromLocalStorage = localStorage.getItem('book') ? JSON.parse(localStorage.getItem('book')) : {}
const authFromLocalStorage = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {}

const INITIAL_STATE = {
    cart: cartFromLocalStorage,
    getBooks: {
        books: bookFromLocalStorage,
    },
    getBookDetails: {
        book: currentBookFromLocalStorage,
    },
    payment: { destination: null },
    auth: authFromLocalStorage
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store