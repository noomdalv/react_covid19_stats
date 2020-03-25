import { combineReducers } from 'redux';
import countriesReducer from './countries_reducer';

const rootReducer = combineReducers({
	countries: countriesReducer
})

export default rootReducer;
