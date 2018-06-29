import React from 'react'
import ListItem from '../../JobsTabSwitcher/listItem'

it('renders without crashing', () => {
	expect(shallow(<ListItem/>)).toMatchSnapshot()
})