import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
import { createNavigationPropConstructor, initializeListeners, createReduxBoundAddListener } from 'react-navigation-redux-helpers'

import Example from './screens/Example/'
import AuthScreen from './screens/Auth/Auth/'
import LoginScreen from './screens/Auth/Login/'

const createScreenObject = screen => ({
	screen: screen,
	navigationOptions: { 
		header: null
	}
})

const AppStack = createStackNavigator(
	{	
		Example: createScreenObject(Example)
	},
	{
		initialRouteName: 'Example'
	}
)

const AuthStack = createStackNavigator(
	{
		Login: createScreenObject
	}
)

const SwitchNav = createSwitchNavigator(
	{
		AuthScreen: createScreenObject(AuthScreen),
		App: AppStack,
		Auth: AuthStack,
	},
	{
		initialRouteName: 'AuthScreen'
	}
)

const Nav = () =>
	<SwitchNav/> 

export default Nav
export { 
	SwitchNav 
}
