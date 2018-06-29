import { ON_CLICK_JOB_ROW } from '../../activeJob/constants'
import reducer from '../../activeJob/reducer'

const initState = { data: '' }

it('should return the initial state', () => {
	expect(reducer(undefined, {})).toEqual(initState)
})

it('should handle ON_CLICK_JOB_ROW', () => {
	const payload = 'clicked row item'
	const action = { type: ON_CLICK_JOB_ROW, payload: payload }
	const handledReducer = reducer(initState, action)
	const expectedResults = { ...initState, data: payload }
	expect(handledReducer).toEqual(expectedResults)
})