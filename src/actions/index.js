import axios from 'axios';

export const getGlobalStats = () => {
	return(dispatch) => {
		return axios.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", { headers : {
			"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
			"x-rapidapi-key": "5c719792d4msh7f9766d6d5c3653p1484ccjsn29e5a49c38b4"
		}})
		.then(response => {
			const globalStatsArray = response.data;
			dispatch(loadGlobalStats(globalStatsArray));
		});
	}
}

export const getCountries = () => {
	return(dispatch) => {
		return axios.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", { headers : {
			"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
			"x-rapidapi-key": "5c719792d4msh7f9766d6d5c3653p1484ccjsn29e5a49c38b4"
		}})
		.then(response => {
			const countriesArray = response.data.countries_stat.map(country => country.country_name).sort();
			dispatch(loadCountries(countriesArray));
		});
	}
}

export const getCountryStats = (countryName) => {
	return(dispatch) => {
		return axios.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", { headers : {
			"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
			"x-rapidapi-key": "5c719792d4msh7f9766d6d5c3653p1484ccjsn29e5a49c38b4"
		}})
		.then(response => {
			const countryStats = response.data.countries_stat.filter(country =>
				country.country_name === countryName)
			dispatch(loadCountryStats(countryStats))
		})
	}
}

export const loadGlobalStats = data => ({
		type: "LOAD_GLOBAL_STATS",
		globalStats: data
})

export const loadCountries = countries => ({
		type: "LOAD_COUNTRIES",
		countries: countries
})

export const loadCountryStats = stats => ({
	type: "LOAD_COUNTRY_STATS",
	countryStats: stats
})
