import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../sagas/rootSaga";
import loginReducer from "./features/loginSlice";

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
    reducer:{
        login: loginReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga);

