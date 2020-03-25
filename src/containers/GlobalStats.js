import React from 'react';
import PropTypes from 'prop-types';

class GlobalStats extends React.Component {
  componentDidMount() {
    const { getGlobalStats } = this.props;
    getGlobalStats();
  }

  render() {
    const { globalStats } = this.props;
    const stats = globalStats !== {} ? (
      <div>
        <p>
          Confirmed:
          { globalStats.total_cases }
        </p>
        <p>
          Recovered:
          { globalStats.total_recovered }
        </p>
        <p>
          Deaths:
          { globalStats.total_deaths }
        </p>
      </div>
    ) : <div>Loading Data...</div>;
    return (
      <div>
        { stats }
      </div>
    );
  }
}

GlobalStats.propTypes = {
  getGlobalStats: PropTypes.func.isRequired,
  globalStats: PropTypes.instanceOf(Object).isRequired,
};

export default GlobalStats;
