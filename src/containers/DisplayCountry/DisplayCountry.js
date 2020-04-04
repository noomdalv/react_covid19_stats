import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Country from '../../components/Country/Country';
import { getCountryStats } from '../../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './DisplayCountry.module.css';

const DisplayCountry = ({ getCountryStats, countryStats }) => {
	let { country } = useParams();
	useEffect(() => {
		getCountryStats(country);
	}, [getCountryStats, country])

    return (
	    <div id={styles.display_country}>
				<Country country={country} countryStats={countryStats} />
	    </div>
    );
}

DisplayCountry.propTypes = {
  getCountryStats: PropTypes.func.isRequired,
  countryStats: PropTypes.instanceOf(Array)
};

const mapStatetoProps = state => ({
  countryStats: state.countryStats,
});

const mapDispatchToProps = dispatch => ({
  getCountryStats: (country) => dispatch(getCountryStats(country)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(DisplayCountry);
