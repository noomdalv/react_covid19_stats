import axios from 'axios';
import codes from '../utils/countrycodes';

const LOAD_GLOBAL_STATS = 'LOAD_GLOBAL_STATS';
const LOAD_COUNTRIES = 'LOAD_COUNTRIES';
const LOAD_COUNTRY_STATS = 'LOAD_COUNTRY_STATS';

export const loadGlobalStats = data => ({
  type: LOAD_GLOBAL_STATS,
  globalStats: data,
});

export const loadCountries = countries => ({
  type: LOAD_COUNTRIES,
  countries,
});

export const loadCountryStats = stats => ({
	type: LOAD_COUNTRY_STATS,
	 countryStats: stats,
});

export const getGlobalStats = () => dispatch => axios.get('https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php', {
  headers: {
    'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
    'x-rapidapi-key': '5c719792d4msh7f9766d6d5c3653p1484ccjsn29e5a49c38b4',
  },
})
  .then(response => {
    const globalStatsArray = response.data;
    dispatch(loadGlobalStats(globalStatsArray));
  });

export const getCountries = () => dispatch => axios.get('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php', {
  headers: {
    'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
    'x-rapidapi-key': '5c719792d4msh7f9766d6d5c3653p1484ccjsn29e5a49c38b4',
  },
})
  .then(response => {
    const countriesArray = response.data.countries_stat.map(country => country.country_name).sort();
    dispatch(loadCountries(countriesArray));
  });

export const getCountryStats = countryName => dispatch => {
  axios.get('https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php', {
    headers: {
      'x-rapidapi-host': 'coronavirus-monitor.p.rapidapi.com',
      'x-rapidapi-key': '5c719792d4msh7f9766d6d5c3653p1484ccjsn29e5a49c38b4',
    },
  })
    .then(response => {
	      if (countryName) {
					let countryStats = response.data.countries_stat;
		      countryStats = countryStats.filter(country => country.country_name === countryName);
					if (countryStats.length > 0) {
						let countryCode = Object.keys(codes).filter(key => codes[key] === countryName);
		        if (countryName === 'Channel Islands' || countryName === 'Diamond Princess') { countryCode = 'GB'; }
						countryStats['0'].code = countryCode;
					} else {
						countryStats = undefined;
					}
					dispatch(loadCountryStats(countryStats));
				}
    });
};
