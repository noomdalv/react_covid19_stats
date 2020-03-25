const defaultState = ["Loading..."];

const countriesReducer = (state = defaultState, action) => {
	if (action.type === "LOAD_COUNTRIES") {
		console.log("load countries reducer fired")
		return action.countries
	}
	return state
}

export default countriesReducer;
