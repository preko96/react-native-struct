import React from 'react'
import { JobsScreen } from '../../TestJobsScreen/'

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
					completedForms: '10',
					totalForms: '50'
				}
			]
		}
	]
}

let wrapper

beforeEach(()=>{
	wrapper = shallow(<JobsScreen {...mockProps} />)
})

it('renders without crashing', () => {
	expect(wrapper).toMatchSnapshot()
})