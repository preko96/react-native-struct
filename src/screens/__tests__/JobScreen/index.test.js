import React from 'react'
import { JobScreen } from '../../JobScreen/'

import configureMockStore from 'redux-mock-store'
import thunkMiddleware from 'redux-thunk'
export const mockStore = configureMockStore([thunkMiddleware])

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
	const store = mockStore(
		{ 
			activeJob: {
				data: {
					BuildingNumber: '',
					PrimaryStreet: '',
					Postcode: '',
					company: '',
					SecondaryStreet: '',
					Town: '',
					County: ''
				}
			}
		}
	)
	expect(shallow(<JobScreen store={store} />)).toMatchSnapshot()
})