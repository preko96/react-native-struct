import React from 'react'
import { JobsScreen } from '../../TestJobsScreen/'
import { List } from 'native-base'

let wrapper

const mockProps = {
	footerHeight: 200,
	onClickJobRow: jest.fn(),
	onEditAddress: jest.fn(),
	onDeleteJob: jest.fn(),
	onRefreshJobsRequest: jest.fn(),
	onResetStateForNewJob: jest.fn(),
	refreshingList: false,
	jobs: [
		{
			title: 'mockTitle',
			data: [
				{
					address: 'mockAddres',
					completedForms: 10,
					totalForms: 50
				}
			]
		}
	]
}

beforeEach(()=>{
	jest.clearAllMocks()
	wrapper = shallow(<JobsScreen {...mockProps} />)
})

it('renders without crashing', () => {
	expect(wrapper).toMatchSnapshot()
})

it('calls onEditAddress when click to the edit "tab"', () => {
})

