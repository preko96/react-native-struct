import React from 'react'
import { UserRegister } from '../../UserRegister/'

let wrapper
const mockProps = {
	
}

beforeEach(() => {
	wrapper = shallow(<UserRegister {...mockProps}/>)
})

it('renders without crashing', () => {
	expect(wrapper).toMatchSnapshot()
})