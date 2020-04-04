import React from 'react';
import { shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import App from '../components/App/App';

const mockStore = configureMockStore([ thunk ]);
const storeStateMock = {
  globalStats: [],
	countries: []
};

let appComponent;
describe('App Component renders without errors', () => {

  beforeEach(() => {
    const store = mockStore(storeStateMock);
		appComponent = shallow(<App store={store} />).dive().dive();
  });

	it('It should render main container and img thumbnail', () => {
		const idContainer = appComponent.find('div#container');
		const img = appComponent.find('img#thumbnail');
		expect(idContainer.length).toBe(1);
		expect(img.length).toBe(1);
	})

	it('renders GlobalStats component', () => {
		const GlobalStats = appComponent.find('GlobalStats')
		expect(GlobalStats.length).toEqual(1);
	});

	it('renders CountryFilter component', () => {
		const CountryFilter = appComponent.find('withRouter(CountryFilter)')
		expect(CountryFilter.length).toEqual(1);
	});
})
