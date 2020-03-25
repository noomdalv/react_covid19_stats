import React from 'react';
import CountryStats from '../components/CountryStats';
import { getCountryStats } from '../actions';
import { connect } from 'react-redux';

class DisplayCountry extends React.Component {
	componentDidMount() {
		this.props.getCountryStats();
	}

	render() {		
		return (
			<div>
		    <CountryStats />
		  </div>
		)
	}
};

const mapDispatchToProps = dispatch => ({
	getCountryStats: () => dispatch(getCountryStats())
})

export default connect(null, mapDispatchToProps)(DisplayCountry);
