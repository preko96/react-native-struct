import { EDIT_ADDRESS_STATE, EDIT_MEASURE_STATE, EDIT_FORMS_STATE, EDIT_ALL_STATE } from '../../edit/constants'
import reducer from '../../edit/reducer'

const initState = {
	editAddress: false,
	editMeasure: false,
	editForms: false,
	jobID: undefined
}

it('should return the initial state', () => {
	expect(reducer(undefined, {})).toEqual(initState)
})

it('should handle EDIT_ADDRESS_STATE', () => {
	const payload = { state: true, jobID: undefined }
	const action = { type: EDIT_ADDRESS_STATE, payload: payload }
	const handledReducer = reducer(initState, action)
	const expectedResults = { ...initState, editAddress: payload.state, jobID: undefined }
	expect(handledReducer).toEqual(expectedResults)
})

it('should handle EDIT_MEASURE_STATE', () => {
	const payload = { state: true, jobID: undefined }
	const action = { type: EDIT_MEASURE_STATE, payload: payload }
	const handledReducer = reducer(initState, action)
	const expectedResults = { ...initState, editMeasure: payload.state, jobID: undefined }
	expect(handledReducer).toEqual(expectedResults)
})

it('should handle EDIT_FORMS_STATE', () => {
	const payload = { state: true, jobID: undefined }
	const action = { type: EDIT_FORMS_STATE, payload: payload }
	const handledReducer = reducer(initState, action)
	const expectedResults = { ...initState, editForms: payload.state, jobID: undefined }
	expect(handledReducer).toEqual(expectedResults)
})

it('should handle EDIT_ALL_STATE', () => {
	const payload = { state: true, jobID: undefined }
	const action = { type: EDIT_ALL_STATE, payload: payload }
	const handledReducer = reducer(initState, action)
	const expectedResults = { 
		...initState, 
		editAddress: payload.state,
		editMeasure: payload.state, 
		editForms: payload.state,
		jobID: undefined
	}
	expect(handledReducer).toEqual(expectedResults)
})