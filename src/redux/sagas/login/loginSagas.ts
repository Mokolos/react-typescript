import { AxiosError } from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { loginError, loginSuccess } from '../../reducers/login/loginSlice';
import { loginPost } from '../../api/login/loginPost';
import { FormLoginResponse, FormLoginSubmit } from '../../../types/login/formLogin';
import { loginConstants } from '../../constants/login/loginConstants';

export function* loginSaga (action: FormLoginSubmit){
    const { email, password } = action.payload;
    try {
        const response:FormLoginResponse = yield call(loginPost, email, password);
        if(response.status === 200){
            yield put(loginSuccess(response.data));
        }else{
            throw response;
        } 
    } catch (error) {
        if(error instanceof AxiosError){
            yield put(loginError(error.response?.data));    
        }  
    }   
};

export function* watchLoginSaga(){
    yield takeEvery(loginConstants.LOGIN_SUBMIT, loginSaga);
}
