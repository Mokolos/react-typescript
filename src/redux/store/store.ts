import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../sagas/rootSaga";
import loginReducer from "../reducers/login/loginSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:{
        login: loginReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


