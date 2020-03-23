import React from 'react';

class GlobalStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Global Stats</h1>
        <p>Confirmed: 0</p>
        <p>Deaths: 0</p>
        <p>Recovered: 0</p>
      </div>
    );
  }
}

export default GlobalStats;
