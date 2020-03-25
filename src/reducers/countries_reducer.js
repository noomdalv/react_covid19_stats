const defaultState = ["Loading..."];

const countriesReducer = (state = defaultState, action) => {
	if (action.type === "LOAD_COUNTRIES") {		
		return action.countries
	}
	return state
}

export default countriesReducer;
