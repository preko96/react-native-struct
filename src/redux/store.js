import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
import rootSaga from './sagas'
import { Platform } from 'react-native'
import devTools from 'remote-redux-devtools'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [thunk, sagaMiddleware]

const enhancer = compose(
	applyMiddleware(...middlewares),
	devTools({
		name: Platform.OS,
		hostname: 'localhost',
		port: 5678,
	}),
)

const store = createStore(combineReducers({ ...reducers }), enhancer)
sagaMiddleware.run(rootSaga)

export default store
