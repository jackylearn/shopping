import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension"

// reducers
import { cartReducer } from './reducers/cartReducers.js'
import { getBooksReducer, getBookDetailsReducer, followBookReducer } from './reducers/bookReducers.js'
import { authReducer } from './reducers/authReducers.js'
import { modalReducer } from './reducers/modalReducers.js'

const reducer = combineReducers({
    cart: cartReducer,
    getBooks: getBooksReducer,
    getBookDetails: getBookDetailsReducer,
    followedBooks: followBookReducer,
    auth: authReducer,
    modal: modalReducer,
})

const middleware = [thunk]

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store