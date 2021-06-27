import {takeEvery,delay, put} from 'redux-saga/effects';
import {incrementSaga, incrementSagaSuccess} from './counterSlice';
import {PayloadAction} from "@reduxjs/toolkit";

function * handleIncrementSaga(action: PayloadAction<number>) {
    console.log('waiting 2s')

    yield delay(2000);

    console.log('waiting done, dispatch action')

    yield put(incrementSagaSuccess(action.payload))
}

export default function * counterSaga() {
    console.log('counter saga')
    console.log('incrementSaga.toString() => ', incrementSaga.toString())
    console.log(typeof incrementSaga, incrementSaga)
    yield takeEvery(incrementSaga.toString(), handleIncrementSaga);
}
