import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CountryStats from '../components/CountryStats';
import { getCountryStats } from '../actions';

class DisplayCountry extends React.Component {
  componentDidMount() {
    const { getCountryStats } = this.props;
    getCountryStats();
  }

  render() {
    const { countryStats } = this.props;
    return (
      <div>
        <CountryStats countryStats={countryStats} />
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
