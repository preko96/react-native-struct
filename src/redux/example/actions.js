import {
	ON_EXAMPLE_ACTION,
	EXAMPLE_ACTION
} from './constants'

//thunk action
export const onExampleAction = example => dispatch => {
	dispatch({
		type: ON_EXAMPLE_ACTION,
		payload: example
	})
}

//normal action
export const exampleAction = example => ({
	type: EXAMPLE_ACTION,
	payload: example
})