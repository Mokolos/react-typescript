import { createAction } from "@reduxjs/toolkit";
import { loginConstants } from "../../constants/login/loginConstants";

const loginSubmit = createAction(
    loginConstants.LOGIN_SUBMIT, 
    function prepare(data){
        return{
            payload:{
                data
            }
        }
    }
);

export default loginSubmit;