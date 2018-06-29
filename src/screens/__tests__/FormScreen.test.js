import React from 'react'
import { FormScreen } from '../FormScreen/'
import { FormBuilder } from '../../resources/js/formBuilder'

import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
export const mockStore = configureMockStore([thunkMiddleware])
import { mount } from 'enzyme'

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

jest.mock('../../resources/js/formBuilder', ()=>{
	const FormBuilder = () => {
		return {
			Reset: () => {
				return FormBuilder
			},
			Render: () => {
				return null
			},
			FromJSON: (json) => {
				return FormBuilder
			},
			Fetch: () => {
				return new Promise(resolve => {
					resolve([])
				})
			}
		}
	}

	return { FormBuilder }
})

jest.mock('../../resources/js/navigationHelper', () => {
	const navigationHelper = {
		getNavigationParams: () => {
			return
		}
	}

	return navigationHelper
})



it('renders without crashing', () => {
	const store = mockStore(
		{ 
			form: {json: ''}
		}
	)
	expect(shallow(<FormScreen store={store} />)).toMatchSnapshot()
})

it('renders without crashing mount', () => {
	jest.mock('react-native', () => require('react-native-mock-render/mock'), {virtual: true})
	const store = mockStore(
		{ 
			form: {json: ''}
		}
	)
	const wrapper = mount(<FormScreen store={store} />)
	wrapper.mount()
	
	expect(wrapper).toMatchSnapshot()
})

it('test load form function', async() => {
	jest.mock('react-native', () => require('react-native-mock-render/mock'), {virtual: true})

	const store = mockStore(
		{ 
			form: {json: '[{"type":"label","params":{"Value":"","Title":"Test Label","Style":{"fontSize":12,"fontColour":"#000","fontWeight":400},"Column":"label","Table":"testForm","FromDatabase":false,"PrimaryKeys":{}}}]'}
		}
	)
	const wrapper = mount(<FormScreen store={store}/>)
	wrapper.setProps({json: '[{"type":"label","params":{"Value":"","Title":"Test Label","Style":{"fontSize":12,"fontColour":"#000","fontWeight":400},"Column":"label","Table":"testForm","FromDatabase":false,"PrimaryKeys":{}}}]'})
	// await wrapper.instance().loadForm()
	
	expect(wrapper.state('Form')).toMatchSnapshot()
})