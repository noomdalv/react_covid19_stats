import React from 'react';
import { connect } from 'react-redux';
import { getCountries } from '../actions'
import GlobalStats from '../containers/GlobalStats';
import CountryFilter from './CountryFilter';
import DisplayCountry from './DisplayCountry';

const App = (props) => (
	<div>
		<h1>CoronaVirus(COVID-19) STATISTICS</h1>
		<GlobalStats />
		<CountryFilter getCountries={props.getCountries} countries={props.countries} />
		<DisplayCountry />
	</div>
)


const mapStatetoProps = state => ({
	countries: state.countries
});

const mapDispatchToProps = dispatch => ({
	getCountries: () => dispatch(getCountries())
})

export default connect(mapStatetoProps, mapDispatchToProps)(App);
