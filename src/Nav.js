import React from 'react'
import { createStackNavigator, createSwitchNavigator } from 'react-navigation'
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
		Login: createScreenObject(LoginScreen)
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
