import { ON_CLICK_JOB_ROW } from '../../activeJob/constants'
import { onClickJobRow } from '../../activeJob/actions'
import { NavigationActions } from 'react-navigation'

import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
export const mockStore = configureMockStore([thunkMiddleware])

it('should create an action to click on a job row and navigate to it', () => {
	const store = mockStore()
	const item = { row: 3 }
	
	const expectedAction = { type: ON_CLICK_JOB_ROW, payload: item }
	const expectedNavigation = NavigationActions.navigate({ routeName: 'Job' })

	const handledActionCreator = onClickJobRow(item)
	store.dispatch(handledActionCreator)
	const actions = store.getActions()
	expect(actions[0]).toEqual(expectedAction)
	expect(actions[1]).toEqual(expectedNavigation)
})