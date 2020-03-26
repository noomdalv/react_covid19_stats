import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';

const CountryStats = ({ countryStats }) => {
  if (countryStats.length > 0) {
    return (
			<Router>
      <div>
        <h2>Country Information:</h2>
        <p>
          Name:
          { countryStats[0] }
        </p>
        <p>
          Cases:
          { countryStats[1] }
        </p>
        <p>
          Deaths:
          { countryStats[2] }
        </p>
        <p>
          Recovered:
          { countryStats[4] }
        </p>
      </div>
			<Redirect to={`/stats/${countryStats[0]}`} />
			</Router>
    );
  }
  return (
    <h1>Choose a country</h1>
  );
};

CountryStats.propTypes = {
  countryStats: PropTypes.instanceOf(Array).isRequired,
};

export default CountryStats;
