import { StyleSheet } from 'react-native'

export default StyleSheet.create({
	container: {}
})

export const dynamicStyles = {
	container: visible => ({ display: visible  ? 'flex' : 'none' }),
}