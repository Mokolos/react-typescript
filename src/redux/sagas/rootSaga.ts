import { all } from 'redux-saga/effects';
import { loginSaga } from './login/loginSagas';

export default function* rootSaga() {
    yield all([
        loginSaga
    ])
}