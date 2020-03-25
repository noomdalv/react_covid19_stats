const defaultState = ["Loading..."];

const globalStatsReducer = (state = defaultState, action) => {
	if (action.type === "LOAD_GLOBAL_STATS") {		
		return action.globalStats
	}
	return state
}

export default globalStatsReducer;
