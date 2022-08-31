import { all, takeEvery } from "redux-saga/effects";
import slice from "./slice";
import "firebase/firestore";
import todoCom from "./firebaseConfig";
import { addDoc } from "firebase/firestore";

function* watchPostFunc({ payload: post}) {
    yield addDoc(todoCom, post);
    console.log(post);
}

function* watchLoadTodos({ payload: post}) {}

function* watchFunc() {
    yield takeEvery(slice.actions.postAdded, watchPostFunc);
    yield takeEvery(slice.actions.detailList, watchLoadTodos);
}

export default function* rootSaga() {
    yield all([watchFunc()]);
}