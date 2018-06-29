import React from 'react'
import { FormList } from '../../JobsTabSwitcher/formList'

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

let wrapper
const mockLayout = {
	default: {
		CONTENT: { height: 1000, width: 1000 },
		MAP: { height: 300, width: 300 },
	},
	dynamic: {
		SEGMENT: { height: 100, width: 100 }
	}
}

beforeEach(()=> {
	wrapper = shallow(<FormList layoutHelper={mockLayout}/>)
})

it('renders without crashing', () => {
	expect(wrapper).toMatchSnapshot()
})

it('onLayout function setState: height properly', () => {
	wrapper.instance().onLayout()
	expect(wrapper.state('height')).toEqual(600)
})

it('calls GetJobInfo with the jobID', async ()=>{
	expect.assertions(1)
	const wrapper = mount(<FormList/>)
	expect(wrapper.state('forms')).toEqual([])
})



