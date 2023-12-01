import { createContext, useEffect, useReducer, useState } from "react";
import { AuthReducer } from "../reducers/authReducer";
import axiosClient from "../config/axiosClient";




export const AuthContext = createContext();

const initState = {
    user: null,
    isLogged: false,
    isLoading: true,
    errorMsg: ''
}


export const AuthProvider = ({ children }) => {

  const [token, setToken] = useState(() => window.localStorage.getItem('token' || null));
  const [updatedUser, setUpdatedUser] = useState(false);
  const [state, dispatch] = useReducer(AuthReducer, initState);


  const handleUpdateUser = () => {
    return setUpdatedUser(true);
  };

   useEffect(() => {
     window.localStorage.setItem('token', token)
   }, [token])
   
    const login = async(email, password) => {
        
       try {
         const user = await axiosClient.post('/login', {
             email,
             password
         });
            localStorage.setItem("token", user?.data.token);
            localStorage.setItem("payload", user?.data.payload);
            
         dispatch({
             type: 'LOGIN',
             payload:{
                 user: user.data
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
       
    }


  return (
    <AuthContext.Provider value={{token, setToken, handleUpdateUser, updatedUser, state, login}}>
      {children}
    </AuthContext.Provider>
  )
};

