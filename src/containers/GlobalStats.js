import React from 'react';
import PropTypes from 'prop-types';
import styles from './GlobalStats.module.css';

class GlobalStats extends React.Component {
  componentDidMount() {
    const { getGlobalStats } = this.props;
    getGlobalStats();
  }

  render() {
    const { globalStats } = this.props;
    const stats = globalStats !== {} ? (
      <div>
        <div id={styles.globalstats}>
          <div className={styles.globalstat}>
            <h2>Confirmed:</h2>
            { globalStats.total_cases }
          </div>
          <div className={styles.globalstat}>
            <h2>Recovered:</h2>
            { globalStats.total_recovered }
          </div>
          <div className={styles.globalstat}>
            <h2>Deaths:</h2>
            { globalStats.total_deaths }
          </div>
        </div>
        <div id={styles.lastreport}>
          <div className={styles.lastreport_stat}>
            <h4>New Cases:</h4>
            {' '}
            {globalStats.new_cases}
          </div>
          <div className={styles.lastreport_stat}>
            <h4>New Deaths:</h4>
            {' '}
            {globalStats.new_deaths}
          </div>
          <div id={styles.lastupdate}>
            <b>Updated at: </b>
            {' '}
            {globalStats.statistic_taken_at}
            {' '}
            (GMT +0)
          </div>
        </div>
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
