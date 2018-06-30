import { takeLatest } from 'redux-saga/effects'
import { ON_EXAMPLE_ACTION } from './constants'
//worker saga
function* exampleWorker() {
}

//watcher saga
export default function* rootSaga() {
	yield takeLatest(ON_EXAMPLE_ACTION, exampleWorker)
}