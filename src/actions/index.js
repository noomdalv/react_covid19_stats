import axios from 'axios';

export const getGlobalData = () => {
	return(dispatch) => {
		return axios.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php", { headers : {
			"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
			"x-rapidapi-key": "5c719792d4msh7f9766d6d5c3653p1484ccjsn29e5a49c38b4"
		}})
		.then(response => {
			const globalDataArray = response.data;
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
	console.log("getCountries fired from actions")
	return(dispatch) => {
		return axios.get("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php", { headers : {
			"x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
			"x-rapidapi-key": "5c719792d4msh7f9766d6d5c3653p1484ccjsn29e5a49c38b4"
		}})
		.then(response => {
			const countriesArray = response.data.countries_stat.map(country => country.country_name);
			console.log("countriesArray from getCountries(actions) >", countriesArray)
			dispatch(loadCountries(countriesArray));
		});
	}
}

export const loadCountries = (countries) => {
	console.log("loadCountries fired from actions")
	return {
		type: "LOAD_COUNTRIES",
		countries: countries
	}
}
