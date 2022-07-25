import api from '../../api/posts';
import { call, put } from 'redux-saga/effects';
import { loginError, loginSuccess } from '../../reducers/login/loginSlice';

export async function postLogin (email: string, password: string){
    return api.post('/api/login',{
        email: email,
        password: password
    })
    .then(response => {
        console.log(response); 
    })
    .catch(error => {
        console.log(error);   
    })
};

export function* loginSaga (email:string, password:string){
    try {
        const response:string = yield call(postLogin, email, password);
        console.log(response);
        //yield put(loginSuccess(response));
    } catch (error) {
        console.log(error);
        //yield put(loginError(error));
    }
};