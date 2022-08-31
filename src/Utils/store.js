import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Utils/slice";
import rootSaga from "../Utils/sagas";
import createSagaMiddleWare from "redux-saga";

const sagaMiddleWare = createSagaMiddleWare();

const store = configureStore({
    reducer: {
        todo: todoReducer.reducer,
    },

    middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootSaga);

export default store;