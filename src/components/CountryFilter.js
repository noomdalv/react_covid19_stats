import React from 'react';
import { getCountryStats } from '../actions';
import { connect } from 'react-redux';

class CountryFilter extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		this.props.getCountries();
	}

	handleChange(event) {
		event.preventDefault();
		this.props.getCountryStats(event.target.value);
	}

	render() {
		const loadCountries = this.props.countries.map((country, i) => {
			return <option key={"country_"+i} value={country}>{country}</option>
		})
		return (
			<div>
				<label htmlFor="countryFilter">
					Select a Country to display stats:
					<select id="countryFilter" onChange={this.handleChange} >
						{ loadCountries }
					</select>
				</label>
			</div>
		)
	}
};

const mapDispatchToProps = dispatch => ({
	getCountryStats: country => dispatch(getCountryStats(country))
})

export default connect(null, mapDispatchToProps)(CountryFilter);
