import layoutConstants from '../layoutConstants/'
import Platform from './platform'

const empty = {
	ios: {
		tablet: {
			landscape: { style: {}, constant: 0 },
			portrait: { style: {}, constant: 0 },
		},
		phone: {
			landscape: { style: {}, constant: 0 },
			portrait: { style: {}, constant: 0 },
		}
	},
	android: {
		tablet: {
			landscape: { style: {}, constant: 0 },
			portrait: { style: {}, constant: 0 },
		},
		phone: {
			landscape: { style: {}, constant: 0 },
			portrait: { style: {}, constant: 0 },
		}
	}
}

export default (layoutName, debug=false) => {
	const platform = Platform.isIOS() ? 'ios' : 'android'
	const type = Platform.isPhone() ? 'phone' : 'tablet'
	const orientation = Platform.isPortrait() ? 'portrait' : 'landscape'
	if(debug)
		console.warn(`platform: ${platform} type: ${type} orientation: ${orientation}`)

	let selectedPlatform
	let selectedLayout
	let selectedType
	let selectedOrientation

	selectedLayout = layoutConstants[layoutName]
	if(!selectedLayout) {
		console.warn(`${layoutName} layout property is not valid. Did you typed, export it propery?`)
		return empty
	}

	selectedPlatform = selectedLayout[platform]
	if(!selectedPlatform) {
		console.warn(`${platform} platform property is not valid. Did you typed, export it propery?`)
		return empty
	}

	try {
		selectedType = selectedPlatform[type]
	} catch(error) {
		console.warn(`${type} property is not valid. Make sure it defined in ${layoutName}`)
		return empty
	}

	try {
		selectedOrientation = selectedType[orientation]
	} catch(error) {
		console.warn(`${selectedOrientation} property is not valid. Make sure it defined in ${layoutName}: ${selectedOrientation}`)
		return empty
	}

	if (!selectedOrientation['style']) {
		console.warn(`Couldn't find style property in in ${layoutName}: ${selectedOrientation}: ${selectedOrientation}`)
		return empty
	}

	if (!selectedOrientation['constant'] === undefined || !selectedOrientation['constant'] === null) {
		console.warn(`Couldn't find constant property in in ${layoutName}: ${selectedOrientation}: ${selectedOrientation}`)
		return empty
	}
	
	if(debug)
		console.warn(selectedOrientation)

	return selectedOrientation
}