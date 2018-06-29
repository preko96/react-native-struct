import React from 'react'
import { EditExistingJobScreen } from '../../EditJobScreen/'

let wrapper
const mockProps = {
	jobID: 'jobID',
	Company: 'Company',
	SubBuilding: 'SubBuilding',
	BuildingName: 'BuildingName',
	BuildingNumber: 'BuildingNumber',
	PrimaryStreet: 'PrimaryStreet',
	SecondaryStreet: 'SecondaryStreet',
	Town: 'Town',
	County: 'County',
	Postcode:'Postcode',
	ManualAddressReason: 'ManualAddressReason',
	activeJob: 'activeJob',
}

beforeEach(() => {
	wrapper = shallow(<EditExistingJobScreen {...mockProps}/>)
})

it('renders without crashing', () => {
	expect(wrapper).toMatchSnapshot()
})