import React from 'react';
import PropTypes from 'prop-types';

const CountryStats = ({ countryStats }) => {
  if (countryStats.length > 0) {
    return (
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
