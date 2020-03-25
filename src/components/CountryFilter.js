import React from 'react';
import { connect } from 'react-redux';

const CountryFilter = () => {
	loadCountries();
	console.log("countryfilter", countries);
	return (
		<div>
	    <label htmlFor="countryFilter">
	      Select a Country to display stats:
	      <select id="countryFilter">
	        <option name="" id="">Test Country</option>
	      </select>
	    </label>
	  </div>
	)
};

const mapPropsToState = state => ({
	countries: state.countries
});

const mapDispatchToProps = dispatch => ({
	loadCountries: () => dispatch(loadCountries())
})

export default connect(mapPropsToState, mapDispatchToProps)(CountryFilter);
