import {
	ON_EXAMPLE_ACTION
} from './constants'

const initState = {
	example: ''
}

export default (state=initState, action) => {
	switch(action.type) {
	case ON_EXAMPLE_ACTION:
		return { ...state, example: action.payload}
	default:
		return state
	}
}
