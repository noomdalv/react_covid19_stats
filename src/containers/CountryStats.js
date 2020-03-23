import React from 'react';

class CountryStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Country Information:</h2>
        <p>Name: Test</p>
        <p>Confirmed: 0</p>
        <p>Deaths: 0</p>
        <p>Recovered: 0</p>
      </div>
    );
  }
}

export default CountryStats;
