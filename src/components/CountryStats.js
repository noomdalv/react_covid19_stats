import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import styles from './CountryStats.module.css';

const CountryStats = ({ countryStats }) => {
  if (countryStats.length > 0) {
    return (
      <Router>
        <div id={styles.countryInfo}>
          <div id={styles.country_heading} className={styles.country_stat}>
            <img src={`https://www.countryflags.io/${countryStats[10]}/shiny/64.png`} alt="flag" />
            <h1>{ countryStats[0] }</h1>
          </div>
          <div className={styles.country_stat}>
            <b>Cases:</b>
            <br />
            <span>{ countryStats[1] }</span>
          </div>
          <div className={styles.country_stat}>
            <b>Recovered:</b>
            <br />
            <span>{ countryStats[4] }</span>
          </div>
          <div className={styles.country_stat}>
            <b>Deaths:</b>
            <br />
            <span>{ countryStats[2] }</span>
          </div>
        </div>
        <Redirect to={`/stats/${countryStats[0]}`} />
      </Router>
    );
  }
  return (
    <h3 id={styles.no_country}>SELECT A COUNTRY</h3>
  );
};

CountryStats.propTypes = {
  countryStats: PropTypes.instanceOf(Array).isRequired,
};

export default CountryStats;
