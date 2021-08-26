import * as actionTypes from '../constants/cartConstants.js'

export const cartReducer = (state = {}, action) => {
    const item = action.payload;
    switch (action.type) {
        case actionTypes.ADD_TO_CART:
            if (state[item.id])
                return state
            else
                return { ...state, ...item }

        case actionTypes.REMOVE_FROM_CART:
            const { [action.payload]: removedItem, ...rest } = state
            return rest

        case actionTypes.CART_RESET:
            return {}

        default:
            return state
    }
}

export const checkoutReducer = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.CHECKOUT_SUCCESS:
            return {
                destination: action.destination
            }
        case actionTypes.CHECKOUT_FAILURE:
            return {
                error: action.error
            }
        default:
            return state
    }
}
