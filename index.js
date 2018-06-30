import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import store from './src/redux/store'
import App from './src/App'

const EnhancedApp = () => 
<Provider store={store}>
		<App/>
	</Provider>

AppRegistry.registerComponent('empty', () => EnhancedApp)