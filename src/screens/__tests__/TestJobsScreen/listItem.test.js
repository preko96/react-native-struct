import React from 'react'
import ListItem from '../../TestJobsScreen/listItem'

let wrapper

const mockProps = {
	secId: '0',
	rowId: '0',
	rowMap: {
		'00': {
			props: {
				closeRow: jest.fn()
			}
		}
	},
	onPress: jest.fn(),
	top: 'topTitle',
	completedForms: 10,
	totalForms: 50,
}

beforeEach(()=>{
	jest.clearAllMocks()
	wrapper = shallow(<ListItem {...mockProps} />)
})

it('renders without crashing', () => {
	expect(wrapper).toMatchSnapshot()
})

it('close side and call the onPress callback', () => {
	wrapper.simulate('Press')
	expect(mockProps.rowMap['00'].props.closeRow).toHaveBeenCalledTimes(1)
	expect(mockProps.onPress).toHaveBeenCalledTimes(1)
}) 


