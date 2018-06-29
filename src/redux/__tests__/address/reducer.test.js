import { ON_POSTCODE_CHANGE, ENABLE_SEARCH_BUTTON, DISABLED_SEARCH_BUTTON, STORE_ADDRESSES, FINDING_ADDRESS, STORE_ADDRESS, ON_MANUAL_FIELD_CHANGE } from '../../address/constants'
import reducer from '../../address/reducer'

const initState = {
	postcode: '',
	disableSearchButton: true,
	disableManualButton: false,
	addresses: [],
	findingAddress: false,
	address: {
		Postcode: '',
		ManualAddress: false,
		Company: '',
		SubBuilding: '',
		BuildingName: '',
		BuildingNumber: '',
		PrimaryStreet: '',
		SecondaryStreet: '',
		Town: '',
		County: '',
		ManualAddressReason: ''
	}
}

it('should return the initial state', () => {
	expect(reducer(undefined, {})).toEqual(initState)
})

it('should handle ENABLE_SEARCH_BUTTON', () => {
	const payload = 'BL3 6LQ'
	const action = {
		type: ENABLE_SEARCH_BUTTON,
		payload: payload
	}

	const expectedResults = {
		...initState,
		postcode: 'BL3 6LQ',
		disableSearchButton: false,
		address: { ...initState.address, Postcode: payload }
	}

	expect(reducer(initState, action)).toEqual(expectedResults)
})

it('should handle ON_POSTCODE_CHANGE', () => {
	const payload = 'BL3 6LQ'
	const action = {
		type: ON_POSTCODE_CHANGE,
		payload: payload
	}

	const expectedResults = {
		...initState,
		postcode: 'BL3 6LQ',
		findingAddress: false,
		address: { ...initState.address, Postcode: payload }
	}

	expect(reducer(initState, action)).toEqual(expectedResults)
})

it('should handle DISABLED_SEARCH_BUTTON', () => {
	const action = { type: DISABLED_SEARCH_BUTTON }
	const expectedResults = { ...initState, disableSearchButton: true }
	expect(reducer(initState, action)).toEqual(expectedResults)
})

it('should handle STORE_ADDRESSES', () => {
	const payload = 'mockAddress'
	const action = { type: STORE_ADDRESSES, payload: payload }
	const expectedResults = { ...initState, addresses: payload, findingAddress: false, disableManualButton: false, disableSearchButton: false }
	expect(reducer(initState, action)).toEqual(expectedResults)
})

it('should handle FINDING_ADDRESS', () => {
	const action = { type: FINDING_ADDRESS }
	const expectedResults = { ...initState, findingAddress: true, disableManualButton: true, disableSearchButton: true}
	expect(reducer(initState, action)).toEqual(expectedResults)
})

it('should handle STORE_ADDRESS', () => {
	const payload = 'mockAddress'
	const action = { type: STORE_ADDRESS, payload: payload }
	const expectedResults = { ...initState, address: payload }
	expect(reducer(initState, action)).toEqual(expectedResults)
})

it('should handle ON_MANUAL_FIELD_CHANGE', () => {
	const payload = { key: 'mockKey', text: 'mockText' }
	const action = { type: ON_MANUAL_FIELD_CHANGE, payload: payload }
	const expectedResults = { ...initState, address: { ...initState.address, [payload.key]: payload.text } }
	expect(reducer(initState, action)).toEqual(expectedResults)
})