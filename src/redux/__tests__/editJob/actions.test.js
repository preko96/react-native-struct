import { ON_EDIT_JOB, ON_SAVE_EDITED_JOB } from '../../editJob/constants'
import { onEditAddress, onSaveJob } from '../../editJob/actions'
import { NavigationActions } from 'react-navigation'

import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
export const mockStore = configureMockStore([thunkMiddleware])

it('should create an action to edit the addres', () => {
	const store = mockStore()
	const address = { a: 'a', b: 'b' }
	
	const expectedAction = { type: ON_EDIT_JOB, payload: { activeJob: false, a: 'a', b: 'b' }}
	const expectedNavigation = NavigationActions.navigate({ routeName: 'EditJob' })

	const handledActionCreator = onEditAddress(address)
	store.dispatch(handledActionCreator)
	const actions = store.getActions()
	expect(actions[0]).toEqual(expectedAction)
	expect(actions[1]).toEqual(expectedNavigation)
})

it('should create an an address from the activeJob if received empty as parameter', () => {
	
	const mockData = { postcode: 'bl21ja '}

	const store = mockStore({
		activeJob: {data: mockData}
	})

	const expectedAction = { type: ON_EDIT_JOB, payload: { activeJob: true, ...mockData }}
	const expectedNavigation = NavigationActions.navigate({ routeName: 'EditJob' })

	const handledActionCreator = onEditAddress()
	store.dispatch(handledActionCreator)
	const actions = store.getActions()
	expect(actions[0]).toEqual(expectedAction)
	expect(actions[1]).toEqual(expectedNavigation)
})

it('should create an action to save job', () => {
	const store = mockStore()
	const editedJob = '123'
	const expectedAction = { type: ON_SAVE_EDITED_JOB, payload: editedJob}
	const handledActionCreator = onSaveJob(editedJob)
	store.dispatch(handledActionCreator)
	const actions = store.getActions()
	expect(actions[0]).toEqual(expectedAction)
})