import api from '../../api/posts';
import { call, put, takeLatest, take } from 'redux-saga/effects';
import { loginError, loginRequest, loginSuccess } from '../../reducers/login/loginSlice';
import Action from '../../../types/formAction';

export async function postLogin (email: string, password: string){
    api.post('/api/login',{
        email: email,
        password: password
    })
    .then(response => {
        console.log(response);
        return response.data; 
    })
    .catch(error => {
        console.log(error);
        return error;   
    })
};

export function* loginSaga (){
    const action:Action = yield take(loginRequest.type);
    const {email, password} = action.payload; 
    try {
        const response:string = yield call(postLogin, email, password);
        console.log(response);
    } catch (error) {
        console.log(error);
        //yield put(loginError(error));
    }
    //yield put(loginSuccess(response));
};
