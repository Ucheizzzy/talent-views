import authReducer from "./authReducer";
import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    isFetching: false,
    error: false,
    message: null
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer( authReducer, INITIAL_STATE );

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user))
    }, [state.user])

    return(
        <AuthContext.Provider 
        value={{
            user: state.user, 
            isFetching: state.isFetching, 
            error: state.error,
            message: state.message,
            dispatch
        }}
        >{children}</AuthContext.Provider>
    )
}