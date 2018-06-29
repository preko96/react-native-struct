import React from 'react'
import { BackButton } from '../../BackButton/'

import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
export const mockStore = configureMockStore([thunkMiddleware])

it('renders without crashing', () => {
	expect(shallow(<BackButton />)).toMatchSnapshot()
})

it('calls onPressBackButton with the right props on click', () => {
	const fn = jest.fn()
	const expected = 'called with this value'
	const wrapper = shallow(<BackButton routeName={expected} onPressBackButton={fn}/>)
	wrapper.simulate('Press')
	expect(fn).toHaveBeenCalledTimes(1)
	expect(fn).toBeCalledWith(expected)
})

it('renders with prevRout', () => {
	expect(shallow(<BackButton prev={true} />)).toMatchSnapshot()
})