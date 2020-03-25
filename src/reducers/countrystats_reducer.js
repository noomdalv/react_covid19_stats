const defaultState = [];

const countryStatsReducer = (state = defaultState, action) => {
  if (action.type === 'LOAD_COUNTRY_STATS') {
    return action.countryStats.length > 0 ? Object.values(action.countryStats['0']) : state;
  }
  return state;
};

export default countryStatsReducer;
