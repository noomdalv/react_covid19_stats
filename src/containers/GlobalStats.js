import React from 'react';
import axios from 'axios';

class GlobalStats extends React.Component {

  render() {
		return (
			<div>
				<h1>Global Stats</h1>
				<p>Confirmed: 0</p>
				<p>Recovered: 0</p>
			  <p>Deaths: 0</p>
			</div>
		)
  }
}

export default GlobalStats;
