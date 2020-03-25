import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCountries, getGlobalStats } from '../actions';
import GlobalStats from '../containers/GlobalStats';
import CountryFilter from './CountryFilter';
import DisplayCountry from '../containers/DisplayCountry';

const App = ({
  getGlobalStats, getCountries, globalStats, countries,
}) => (
  <div>
    <h1>CoronaVirus(COVID-19) STATISTICS</h1>
    <GlobalStats getGlobalStats={getGlobalStats} globalStats={globalStats} />
    <CountryFilter getCountries={getCountries} countries={countries} />
    <DisplayCountry />
  </div>
);

App.propTypes = {
  getGlobalStats: PropTypes.func.isRequired,
  getCountries: PropTypes.func.isRequired,
  globalStats: PropTypes.instanceOf(Object).isRequired,
  countries: PropTypes.instanceOf(Array).isRequired,
};

const mapStatetoProps = state => ({
  countries: state.countries,
  globalStats: state.globalStats,
});

const mapDispatchToProps = dispatch => ({
  getCountries: () => dispatch(getCountries()),
  getGlobalStats: () => dispatch(getGlobalStats()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(App);
