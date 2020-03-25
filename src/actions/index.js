import axios from 'axios';

export const getGlobalData = () => {
	return(dispatch) => {
		return axios.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", { headers : {
			"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
			"x-rapidapi-key": "5c719792d4msh7f9766d6d5c3653p1484ccjsn29e5a49c38b4"
		}})
		.then(response => {
			dispatch(loadGlobalData(globalDataArray));
		});
	}
}

export const loadGlobalData = (data) => {
	return {
		type: "LOAD_GLOBAL_DATA",
		globalData: data
	}
}

export const getCountries = () => {
	return(dispatch) => {
		return axios.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", { headers : {
			"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
			"x-rapidapi-key": "5c719792d4msh7f9766d6d5c3653p1484ccjsn29e5a49c38b4"
		}})
		.then(response => {
			const countriesArray = response.data.countries_stat.map(country => country.country_name);
			dispatch(loadCountries(countriesArray));
		});
	}
}

export const loadCountries = (countries) => {
	return {
		type: "LOAD_COUNTRIES",
		countries: countries
	}
}
