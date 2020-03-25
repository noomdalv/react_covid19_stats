const defaultState = ["Loading..."];

const countryStatsReducer = (state = defaultState, action) => {
	if (action.type === "LOAD_COUNTRY_STATS") {
		return action.countryStats
	}
	return state
}

export default countryStatsReducer;
