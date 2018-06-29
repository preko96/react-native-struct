import { takeEvery, put, call, all, takeLatest } from 'redux-saga/effects'
import { ON_EXAMPLE_ACTION } from './constants'
//worker saga
function* exampleWorker(action) {
}

//watcher saga
export default function* rootSaga() {
	yield takeLatest(ON_EXAMPLE_ACTION, exampleWorker)
}