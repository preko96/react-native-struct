import React from 'react'
import { Details } from '../../JobsTabSwitcher/details'
import { Col } from 'native-base'

const getTextValue = wrapper => {
	const firstCol = wrapper.find(Col).first()
	const textComponent = firstCol.children()
	const value = textComponent.children()
	return value.text()
}

it('renders without crashing', () => {
	expect(shallow(<Details/>)).toMatchSnapshot()
})

it('renders primaryStreet', () => {
	const expectedBuildingNumber = 100
	const expectedPrimaryStreet = 'primaryStreet'
	const wrapper = shallow(<Details primaryStreet={expectedPrimaryStreet} buildingNumber={expectedBuildingNumber}/>)
	expect(getTextValue(wrapper)).toEqual(`${expectedBuildingNumber} ${expectedPrimaryStreet}`)
})

it('renders secondaryStreet', () => {
	const expectedValue = 'secondaryStreet'
	const wrapper = shallow(<Details secondaryStreet={expectedValue}/>)
	expect(getTextValue(wrapper)).toEqual(expectedValue)
})

it('renders town', () => {
	const expectedValue = 'town'
	const wrapper = shallow(<Details town={expectedValue}/>)
	expect(getTextValue(wrapper)).toEqual(expectedValue)
})

it('renders country', () => {
	const expectedValue = 'country'
	const wrapper = shallow(<Details country={expectedValue}/>)
	expect(getTextValue(wrapper)).toEqual(expectedValue)
})

it('renders postcode', () => {
	const expectedValue = 'postcode'
	const wrapper = shallow(<Details postcode={expectedValue}/>)
	expect(getTextValue(wrapper)).toEqual(expectedValue)
})

it('renders company', () => {
	const expectedValue = 'company'
	const wrapper = shallow(<Details company={expectedValue}/>)
	expect(getTextValue(wrapper)).toEqual(expectedValue)
})
