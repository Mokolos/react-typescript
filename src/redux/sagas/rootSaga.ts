import { all } from 'redux-saga/effects';
import { watchLoginSaga } from './login/loginSagas';

export default function* rootSaga() {
    yield all([
        watchLoginSaga()
    ])
}