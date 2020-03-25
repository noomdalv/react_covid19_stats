const countriesReducer = (state = [], action) => {
	if (action.type === "LOAD_COUNTRIES") {
		return {
			countries: action.countries
		}
	}
	return state
}

export default countriesReducer;
