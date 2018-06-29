import React from 'react'
import DeleteButton from '../../TestJobsScreen/deleteButton'

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
}

beforeEach(()=>{
	jest.clearAllMocks()
	wrapper = shallow(<DeleteButton {...mockProps} />)
})

it('renders without crashing', () => {
	expect(wrapper).toMatchSnapshot()
})

it('close side and call the onPress callback', () => {
	wrapper.simulate('Press')
	expect(mockProps.rowMap['00'].props.closeRow).toHaveBeenCalledTimes(1)
	expect(mockProps.onPress).toHaveBeenCalledTimes(1)
}) 
