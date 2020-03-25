import React from 'react';
import { connect } from 'react-redux';
import { getCountries, getGlobalStats } from '../actions';
import GlobalStats from '../containers/GlobalStats';
import CountryFilter from './CountryFilter';
import DisplayCountry from '../containers/DisplayCountry';

const App = (props) => (
	<div>
		<h1>CoronaVirus(COVID-19) STATISTICS</h1>
		<GlobalStats getGlobalStats={props.getGlobalStats} globalStats={props.globalStats} />
		<CountryFilter getCountries={props.getCountries} countries={props.countries} />
		<DisplayCountry />
	</div>
)

const mapStatetoProps = state => ({
	countries: state.countries,
	globalStats: state.globalStats
});

const mapDispatchToProps = dispatch => ({
	getCountries: () => dispatch(getCountries()),
	getGlobalStats: () => dispatch(getGlobalStats()),
})

export default connect(mapStatetoProps, mapDispatchToProps)(App);
