import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CountryStats from '../components/CountryStats';
import { getCountryStats } from '../actions';
import styles from './DisplayCountry.module.css';

class DisplayCountry extends React.Component {
  componentDidMount() {
    const { getCountryStats } = this.props;
    getCountryStats();
  }

  render() {
    const { countryStats } = this.props;
    const country = countryStats.length > 0 ? countryStats[0] : '';
    return (
      <div id={styles.display_country}>
        <CountryStats country={country} countryStats={countryStats} />
      </div>
    );
  }
}

DisplayCountry.propTypes = {
  getCountryStats: PropTypes.func.isRequired,
  countryStats: PropTypes.instanceOf(Array).isRequired,
};

const mapStatetoProps = state => ({
  countryStats: state.countryStats,
});

const mapDispatchToProps = dispatch => ({
  getCountryStats: () => dispatch(getCountryStats()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(DisplayCountry);
