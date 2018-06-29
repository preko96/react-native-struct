import React from 'react'
import { JobsTabSwitcher } from '../../JobsTabSwitcher/index'
import Details from '../../JobsTabSwitcher/details'
import FormList from '../../JobsTabSwitcher/formList'
import { Button } from 'native-base'

jest.mock('react-native-sqlite-storage', () => {
	const mockSQLite = {
		openDatabase: () => {
			return {
				transaction: () => {
					() => { return [] }
				}
			}
		}
	}
	return mockSQLite
})

it('renders without crashing', () => {
	expect(shallow(<JobsTabSwitcher />)).toMatchSnapshot()
})

it('expect init activeTab to be details', () => {
	const activeTab = shallow(<JobsTabSwitcher />).state('activeTab')
	expect(activeTab).toEqual('details')
})

it('onPressTab works properly', () => {
	const component = shallow(<JobsTabSwitcher />).instance()
	component.onPressTab('test')
	const activeTabAfterPress = component.state.activeTab
	expect(activeTabAfterPress).toEqual('test')
})

it('renders details when activeTab equals details', () => {
	const wrapper = shallow(<JobsTabSwitcher />)
	wrapper.setState({ activeTab: 'details' })
	const details = wrapper.find(Details)
	expect(details).toHaveLength(1)
})

it('renders formsList when activeTab equals forms', () => {
	const wrapper = shallow(<JobsTabSwitcher />)
	wrapper.setState({ activeTab: 'forms' })
	const details = wrapper.find(FormList)
	expect(details).toHaveLength(1)
})

it('set activeTab state to details when details button is pressed', () => {
	const wrapper = shallow(<JobsTabSwitcher />)
	//change activeTab to test the behaviour
	wrapper.setState({ activeTab: 'not details' })

	const detailsButton = wrapper.find(Button).first()
	detailsButton.simulate('Press')
	const activeTab = wrapper.state('activeTab')
	expect(activeTab).toEqual('details')
})

it('set activeTab state to forms when forms button is pressed', () => {
	const wrapper = shallow(<JobsTabSwitcher />)
	//change activeTab to test the behaviour
	wrapper.setState({ activeTab: 'not forms' })
	
	const formsButton = wrapper.find(Button).last()
	formsButton.simulate('Press')
	const activeTab = wrapper.state('activeTab')
	expect(activeTab).toEqual('forms')
})

