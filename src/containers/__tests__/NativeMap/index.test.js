import React from 'react'
import { NativeMap } from '../../NativeMap/'

it('renders without crashing', () => {
	expect(shallow(<NativeMap />)).toMatchSnapshot()
})

it('renders with found location', () => {
	expect(shallow(<NativeMap latitude={0} longitude={0}/>)).toMatchSnapshot()
})