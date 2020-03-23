import React from 'react';
import GlobalStats from '../containers/GlobalStats';
import CountryFilter from './CountryFilter';
import DisplayCountry from './DisplayCountry';

const App = () => (
  <div>
    <h1>CoronaVirus(COVID-19) STATISTICS</h1>
    <GlobalStats />
    <CountryFilter />
    <DisplayCountry />
  </div>
);


export default App;
