import { combineReducers } from 'redux';
import countriesReducer from './countries_reducer';
import globalStatsReducer from './globalstats_reducer';

const rootReducer = combineReducers({
	countries: countriesReducer,
	globalStats: globalStatsReducer
})

export default rootReducer;
