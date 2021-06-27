import {all} from 'redux-saga/effects'
import counterSaga from "../features/counter/counterSaga";

export default function * rootSaga() {
    console.log('Hello saga')

    yield all([counterSaga()])
}
