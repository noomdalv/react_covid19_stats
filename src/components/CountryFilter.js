import React from 'react';

class CountryFilter extends React.Component {
	componentDidMount() {
		this.props.getCountries();
	}
		
	render() {
		const loadCountries = this.props.countries.map((country, i) => {
			return <option key={"country_"+i} value={"country_"+country}>{country}</option>
		})
		return (
			<div>
				<label htmlFor="countryFilter">
					Select a Country to display stats:
					<select id="countryFilter">
						{ loadCountries }
					</select>
				</label>
			</div>
		)
	}
};

export default CountryFilter;
