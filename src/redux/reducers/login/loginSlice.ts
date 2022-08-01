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
        loginRequest: (state, action) => {
            state.loading = true
            state.user = action.payload
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