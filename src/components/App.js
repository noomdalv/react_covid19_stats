import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCountries, getGlobalStats } from '../actions';
import GlobalStats from '../containers/GlobalStats';
import CountryFilter from './CountryFilter';
import styles from './App.module.css';

const App = ({
  getGlobalStats, getCountries, globalStats, countries,
}) => (
    <div id={styles.container}>
				<h1 id={styles.title_header}>CoronaVirus(COVID-19) GLOBAL STATISTICS</h1>
				<GlobalStats getGlobalStats={getGlobalStats} globalStats={globalStats} />
				<CountryFilter getCountries={getCountries} countries={countries} />
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
