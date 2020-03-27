import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCountries, getGlobalStats } from '../actions';
import GlobalStats from '../containers/GlobalStats';
import CountryFilter from './CountryFilter';
import DisplayCountry from '../containers/DisplayCountry';
import Footer from '../containers/Footer';
import styles from './App.module.css';

const App = ({
  getGlobalStats, getCountries, globalStats, countries,
}) => (
  <Router>
    <div id={styles.container}>
      <h1 id={styles.title_header}>CoronaVirus(COVID-19) GLOBAL STATISTICS</h1>
      <GlobalStats getGlobalStats={getGlobalStats} globalStats={globalStats} />
      <CountryFilter getCountries={getCountries} countries={countries} />
      <DisplayCountry />
      <Footer />
    </div>
    <Redirect to="/stats/" />
  </Router>
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
