import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loading:false,
        errorMessage: "",
        success:false,
        isLoggedIn: false,
        token: {}
    },
    reducers:{
        loginRequest: state => {
            state.loading = true
        },
        loginSuccess: (state, action) =>{
            state.loading= false
            state.success= true
            state.isLoggedIn= true
            state.token= action.payload
        },
        loginError: (state , action) =>{
            state.loading= false
            state.success= false
            state.errorMessage= action.payload
            state.isLoggedIn= false 
        }
    }
});

export const { loginRequest, loginSuccess, loginError} = loginSlice.actions;

export default loginSlice.reducer;