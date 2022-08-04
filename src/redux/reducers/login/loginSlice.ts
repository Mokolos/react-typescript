import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        user: {},
        loading:false,
        isLoggedIn: false,
        success:false,
        errorMessage: "",
        token: {}
    },
    reducers:{
        loginRequest: (state, { payload }) => {
            state.loading = true
            state.user= payload.data
        },
        loginSuccess: (state, { payload }) =>{
            state.loading= false
            state.success= true
            state.isLoggedIn= true
            state.token = payload.token
        },
        loginError: (state , { payload }) =>{
            state.loading= false
            state.success= false
            state.isLoggedIn= false
            state.errorMessage = payload.error  
        }
    }
});

export const { loginRequest, loginSuccess, loginError} = loginSlice.actions;

export default loginSlice.reducer;