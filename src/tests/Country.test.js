import React from 'react';
import { shallow } from 'enzyme';
import Country from '../components/Country/Country';

const countryStats = ['Colombia', 2000, 200, 0, 40];
const notFound = ['not found'];

let countryComponent;
describe('renders Country component succesfully', () => {
  beforeEach(() => {
    countryComponent = shallow(<Country countryStats={countryStats} />);
  });

  it('renders countryInfo container', () => {
    const countryInfo = countryComponent.find('div#countryInfo');
    expect(countryInfo.length).toBe(1);
  });

  it('renders Country info prop succesfully', () => {
    const countryName = countryComponent.find('h1#countryName');
    expect(countryName.length).toBe(1);
    expect(countryName.text()).toEqual('Colombia');
  });

  it('renders return link', () => {
    const returnLink = countryComponent.find('Link').prop('to');
    expect(returnLink).toEqual('/');
  });

  it("renders 'country not found' header if no country found", () => {
    countryComponent = shallow(<Country countryStats={notFound} />);
    const notFoundHeader = countryComponent.find('h3#no_country');
    expect(notFoundHeader.length).toBe(1);
    expect(notFoundHeader.text()).toEqual('COUNTRY NOT FOUND');
  });
});
