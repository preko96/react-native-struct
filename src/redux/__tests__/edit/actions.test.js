import { EDIT_ADDRESS_STATE, EDIT_MEASURE_STATE, EDIT_FORMS_STATE, EDIT_ALL_STATE, ON_EDIT_MEASURES } from '../../edit/constants'
import { editAddressState, editMeasuresState, editFormsState, editAllState, onEditMeasures } from '../../edit/actions'
import { NavigationActions } from 'react-navigation'

import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
export const mockStore = configureMockStore([thunkMiddleware])

let store

beforeEach(() => {
	store = mockStore()
})

it('should create an action on start editing a measure (editing or creating)', () => {
	const expectedAction = { type: ON_EDIT_MEASURES }
	const handledActionCreator = onEditMeasures()
	store.dispatch(handledActionCreator)
	const actions = store.getActions()
	expect(actions[0]).toEqual(expectedAction)
	expect(actions[1]).toEqual(NavigationActions.navigate({ routeName: 'Measures' }))
})

it('should create an action to edit address state (editing or creating)', () => {
	const payload = { state: false, jobID: undefined }
	const expectedAction = { type: EDIT_ADDRESS_STATE, payload: payload }
	const handledActionCreator = editAddressState(false) // (false, undefined)
	store.dispatch(handledActionCreator)
	const actions = store.getActions()
	expect(actions[0]).toEqual(expectedAction)
})

it('should create an action to edit measure state (editing or creating)', () => {
	const payload = { state: false, jobID: undefined }
	const expectedAction = { type: EDIT_MEASURE_STATE, payload: payload }
	const handledActionCreator = editMeasuresState(false) // (false, undefined)
	store.dispatch(handledActionCreator)
	const actions = store.getActions()
	expect(actions[0]).toEqual(expectedAction)
})

it('should create an action to edit forms state (editing or creating)', () => {
	const payload = { state: false, jobID: undefined }
	const expectedAction = { type: EDIT_FORMS_STATE, payload: payload }
	const handledActionCreator = editFormsState(false) // (false, undefined)
	store.dispatch(handledActionCreator)
	const actions = store.getActions()
	expect(actions[0]).toEqual(expectedAction)
})

it('should create an action to edit all edit state (editing or creating)', () => {
	const payload = { state: false, jobID: undefined }
	const expectedAction = { type: EDIT_ALL_STATE, payload: payload }
	const handledActionCreator = editAllState(false) // (false, undefined)
	store.dispatch(handledActionCreator)
	const actions = store.getActions()
	expect(actions[0]).toEqual(expectedAction)
})