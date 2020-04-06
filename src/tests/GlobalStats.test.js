import React from 'react';
import { shallow } from 'enzyme';
import GlobalStats from '../containers/GlobalStats/GlobalStats';

const globalStats = {
  total_cases: 10,
  total_recovered: 3,
  total_deaths: 1,
};

const getGlobalStats = () => globalStats;

let globalStatsComponent;

describe('CountryFilter Component renders without errors', () => {
  beforeEach(() => {
    globalStatsComponent = shallow(
      <GlobalStats getGlobalStats={getGlobalStats} globalStats={globalStats} />,
    );
  });

  it('renders (3) global stats', () => {
    const globalStatsCount = globalStatsComponent.find('div.globalstat');
    expect(globalStatsCount.length).toBe(3);
  });

  it('renders (2) last update stats and (1) update date', () => {
    const lastUpdateCount = globalStatsComponent.find('div.lastreport_stat');
    const date = globalStatsComponent.find('div#lastupdate');
    expect(lastUpdateCount.length).toBe(2);
    expect(date.length).toBe(1);
  });

  it('display globalStats correct props data', () => {
    expect(globalStatsComponent.instance().props.globalStats.total_cases).toEqual(10);
    expect(globalStatsComponent.instance().props.globalStats.total_recovered).toEqual(3);
    expect(globalStatsComponent.instance().props.globalStats.total_deaths).toEqual(1);
  });
});
