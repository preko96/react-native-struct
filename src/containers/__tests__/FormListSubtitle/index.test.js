import React from 'react'
import FormsListSubtitle from '../../FormsListSubtitle/index'

// import configureMockStore from 'redux-mock-store'
// import thunkMiddleware from 'redux-thunk'
// export const mockStore = configureMockStore([thunkMiddleware])

it('renders without crashing', () => {
	jest.mock('react-native', () => require('react-native-mock-render/mock'), {virtual: true})
	const item = {
		completedForms: 0,
		totalForms: 1
	}
	const wrapper = mount(<FormsListSubtitle item={item} />)
	wrapper.mount()
	
	expect(wrapper).toMatchSnapshot()
})