export const AuthReducer = (state = { shoppingCart: [] }, action) => {
    switch (action.type) {
        case 'LOGIN': 
            return {
                ...state,
                user: action.payload.user,
                isLogged: true,
                isLoading: false,
                errorMsg: '',
                shoppingCart: action.payload.shoppingCart || []
            }
            case 'LOGOUT': 
            return {
                ...state,
                user: null,
                isLogged: false,
                isLoading: false,
                errorMsg: '',
                shoppingCart: []
            }
            case 'ERROR': 
            return {
                ...state,
                user: null,
                isLogged: false,
                isLoading: false,
                errorMsg: action.payload.errorMsg
            }
            case 'ADD_TO_CART':
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, action.payload]
                };
            case 'REMOVE_FROM_CART':
            return {
                ...state,
                shoppingCart: state.shoppingCart.filter((item, index) => index !== action.payload)
            };
            
        default:
            return state;
    }
}