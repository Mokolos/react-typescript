import { createSlice } from "@reduxjs/toolkit";
type InitialState ={
    user: Object
    loading: boolean
    isLoggedIn: boolean,
    errorMessage: string,
    token: Object
}

const initialState : InitialState = {
    user: {},
    loading:false,
    //initialaze state from local storage to enable user to stay logged in 
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn') || 'false' ),
    errorMessage: "",
    //initialaze state from local storage to enable user to stay logged in 
    token: JSON.parse(localStorage.getItem('token') || '{}')
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        loginRequest: (state, { payload }) => {
            state.loading = true
            state.user = payload
            state.errorMessage = ""  
        },
        loginSuccess: (state, { payload }) =>{
            state.loading= false
            //store isLoggedIn in local storage to keep user logged in between page refresh
            localStorage.setItem('isLoggedIn', JSON.stringify(true))
            state.isLoggedIn= true
            //store token in local storage to keep user logged in between page refresh
            localStorage.setItem('token', JSON.stringify(payload.token))
            state.token = payload.token
            state.errorMessage = ""
        },
        loginError: (state , { payload }) =>{
            state.loading= false
            state.isLoggedIn= false
            state.errorMessage = payload.error 
        },
        logOut: (state) =>{
            state.user = {}
            //change isLoggedIn false in localStorage
            localStorage.setItem('isLoggedIn', JSON.stringify(false))
            state.isLoggedIn = false
            //remove token in localStorage 
            localStorage.removeItem('token')
            state.token = {}
        }
    }
});

export const { loginRequest, loginSuccess, loginError, logOut} = loginSlice.actions;

export default loginSlice.reducer;