import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Country.module.css';

const Country = ({ countryStats }) => {
  if (countryStats.length > 0 && countryStats[0] !== 'not found') {
    return (
      <div id={styles.countryInfo}>
        <div id={styles.country_heading}>
          <h2 id={styles.title_header}>STATISTICS BY COUNTRY</h2>
          <div className={styles.countryFlag}>
            <h1 id={styles.countryName}>{ countryStats[0] }</h1>
            <img src={`https://www.countryflags.io/${countryStats[10]}/shiny/64.png`} alt="flag" />
          </div>
        </div>
        <div className={styles.country_statWrapper}>
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
        <div className={styles.return}>
          <Link to="/">
            <button className={styles.returnBtn} type="button">RETURN</button>
          </Link>
        </div>
      </div>
    );
  } if (countryStats[0] === 'not found') {
    return (
      <div className={styles.return}>
        <h3 id={styles.no_country}>COUNTRY NOT FOUND</h3>
        <Link to="/">
          <button className={styles.returnBtn} type="button">RETURN</button>
        </Link>
      </div>
    );
  }
  return (
    <h3 id={styles.no_country}>LOADING...</h3>
  );
};

Country.propTypes = {
  countryStats: PropTypes.instanceOf(Array).isRequired,
};

export default Country;
