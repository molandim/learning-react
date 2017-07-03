let initialState = [];
export default function shoppingCart(state = initialState, action) {
    switch (action.type) {
        case constants.ADD_TO_CART:
            return {
                ...state,
                shoppingCart: [...state, action.payload]
            }
        case constants.REMOVE_FROM_CART:
            return {
                ...state,
                products: state.filter((productId) => productId !== action.payload)
            }
        default:
            return state;
    }
}