import React from 'react'
import { MainFooter } from '../../MainFooter/'

it('renders without crashing', () => {
	expect(shallow(<MainFooter />)).toMatchSnapshot()
})