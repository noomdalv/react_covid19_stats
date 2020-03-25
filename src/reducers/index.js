import { combineReducers } from 'redux';
import countriesReducer from './countries_reducer';
import globalStatsReducer from './globalstats_reducer';
import countryStatsReducer from './countrystats_reducer';

const rootReducer = combineReducers({
  countries: countriesReducer,
  globalStats: globalStatsReducer,
  countryStats: countryStatsReducer,
});

export default rootReducer;
