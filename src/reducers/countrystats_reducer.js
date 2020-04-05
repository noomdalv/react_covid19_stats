const LOAD_COUNTRY_STATS = 'LOAD_COUNTRY_STATS';
const defaultState = [];

const countryStatsReducer = (state = defaultState, action) => {
  if (action.type === LOAD_COUNTRY_STATS) {
    if (!action.countryStats) {
      return ['not found'];
    } if (action.countryStats.length > 0) {
      return Object.values(action.countryStats['0']);
    }
  }
  return state;
};

export default countryStatsReducer;
