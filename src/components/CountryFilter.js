import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Select from 'react-select';
import { getCountryStats } from '../actions';
import styles from './CountryFilter.module.css';

class CountryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { getCountries } = this.props;
    getCountries();
  }

  handleChange(option) {
    const { getCountryStats } = this.props;
    getCountryStats(option.value);
  }

  render() {
    const { countries } = this.props;
    const options = [];
    countries.map(country => options.push({ value: country, label: country }));
    return (
      <div id={styles.countryFilter}>
        <h3 id={styles.select_heading}>STATISTICS BY COUNTRY:</h3>
        <Select
          id={styles.countryList}
          defaultValue={{ label: 'Choose a location...', value: 0 }}
          onChange={this.handleChange}
          options={options}
        />
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
