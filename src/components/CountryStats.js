import React from 'react';
import { connect } from 'react-redux';

class CountryStats extends React.Component {
	render() {
		console.log("COUNTRY STATS", this.props.countryStats)
		const stats = this.props.countryStats.length > 0 ? Object.values(this.props.countryStats) : "Choose a country";
		return (
			<div>
		    <h2>Country Information:</h2>
		    <p>Name: {stats[0].country_name}</p>
		    <p>Cases: {stats[0].cases}</p>
		    <p>Deaths: {stats[0].deaths}</p>
		    <p>Recovered: {stats[0].total_recovered}</p>
		  </div>
		)
	}
};

const mapStatetoProps = state => ({
	countryStats: state.countryStats
})

export default connect(mapStatetoProps)(CountryStats);
