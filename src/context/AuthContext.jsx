import { createContext, useEffect, useReducer, useState } from "react";
import { AuthReducer } from "../reducers/authReducer";
import axiosClient from "../config/axiosClient";




export const AuthContext = createContext();

const initState = {
    user: null,
    isLogged: false,
    isLoading: true,
    errorMsg: '',
    shoppingCart: []
}


export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(() => window.localStorage.getItem('token') || null);
  const [state, dispatch] = useReducer(AuthReducer, (localStorage.getItem('authState') && JSON.parse(localStorage.getItem('authState'))) || initState);

  const addToShoppingCart = (item) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item
    });
  };

  const removeFromShoppingCart = (index) => {
    dispatch({
        type: 'REMOVE_FROM_CART',
        payload: index
    });
  };

   useEffect(() => {
     window.localStorage.setItem('token', token)
   }, [token])
   
    const login = async(email, password) => {

   
       try {
         const user = await axiosClient.post('/api/login', {
             email,
             password
         });
            localStorage.setItem("token", user?.data.token);
            localStorage.setItem("payload", user?.data.payload);

            const shoppingCart = [];
            
         dispatch({
             type: 'LOGIN',
             payload:{
                 user: user.data,
                 shoppingCart: shoppingCart
             },
         })
       } catch (error) {
        dispatch({
            type: 'ERROR',
            payload: {
                errorMsg: error.response.data
            }
        })
       }
       
    };

    const logOut = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('payload');
      localStorage.removeItem('state');
      dispatch({
        type: 'LOGOUT'
      })
    }

    useEffect(() => {
      localStorage.setItem('authState', JSON.stringify(state))
    },[state]);



  return (
    <AuthContext.Provider value={{token, setToken, state, addToShoppingCart, removeFromShoppingCart, login, logOut}}>
      {children}
    </AuthContext.Provider>
  )
};

