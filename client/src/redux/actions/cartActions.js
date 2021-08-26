import * as actionTypes from '../constants/cartConstants.js'
import axios from 'axios'

export const addToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/books/${id}`)

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            [data._id]: {
                title: data.title,
                author: data.author,
                description: data.description,
                imageUrl: data.imageUrl,
                price: data.price,
                currency: data.currency,
            }
        }
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart))
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart))
}

export const resetCart = () => (dispatch, getState) => {
    dispatch({ type: actionTypes.CART_RESET })
    localStorage.setItem('cart', JSON.stringify(getState().cart))
}

export const checkout = () => async (dispatch, getState) => {
    try {
        dispatch({ type: actionTypes.CHECKOUT_REQUEST })
        const { data } = await axios.post('/payment/checkout', { items: Object.keys(getState().cart) })
        dispatch({
            type: actionTypes.CHECKOUT_SUCCESS,
            destination: data.paymentUrl
        })
    } catch (err) {
        dispatch({
            type: actionTypes.CHECKOUT_FAILURE,
            error: err.message
        })
    }
}