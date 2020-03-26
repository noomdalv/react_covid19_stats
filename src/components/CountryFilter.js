import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCountryStats } from '../actions';


class CountryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCountries } = this.props;
    getCountries();
  }

  handleChange(event) {
    event.preventDefault();
    const { getCountryStats } = this.props;
    getCountryStats(event.target.value);
  }

  render() {
    const { countries } = this.props;
    const loadCountries = countries.map(country => <option key={country}>{country}</option>);
    return (
      <div>
        <label htmlFor="countryFilter">
          Select a Country to display stats:
          <select id="countryFilter" onChange={this.handleChange}>
            { loadCountries }
          </select>
        </label>
      </div>
    );
  }
}

CountryFilter.propTypes = {
  getCountries: PropTypes.func.isRequired,
  getCountryStats: PropTypes.func.isRequired,
  countries: PropTypes.instanceOf(Array).isRequired,
};

const mapDispatchToProps = dispatch => ({
  getCountryStats: country => dispatch(getCountryStats(country)),
});

export default connect(null, mapDispatchToProps)(CountryFilter);
