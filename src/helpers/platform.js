import DeviceInfo from 'react-native-device-detection'
import { Dimensions, StatusBar } from 'react-native'

const getDim = () => ({ width: Dimensions.get('window').width, height: (Dimensions.get('window').height - (DeviceInfo.isAndroid ? StatusBar.currentHeight : 0))})
const isIphoneX = () => DeviceInfo.isIphoneX
const isIOS = () => DeviceInfo.isIos
const isAndroid = () => DeviceInfo.isAndroid
const isPortrait = () => getDim().height >= getDim().width
const isLandscape = () => getDim().width >= getDim().height
const isTablet = () => DeviceInfo.isTablet
const isPhone = () => DeviceInfo.isPhone

export default {
	getDim,
	isIphoneX,
	isIOS,
	isAndroid,
	isPortrait,
	isLandscape,
	isTablet,
	isPhone
}