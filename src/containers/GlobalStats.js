import React from 'react';

class GlobalStats extends React.Component {
	componentDidMount() {
		this.props.getGlobalStats();
	}

  render() {		
		const stats = this.props.globalStats !== {} ? (
			<div>
				<p>Confirmed: { this.props.globalStats.total_cases }</p>
				<p>Recovered: { this.props.globalStats.total_recovered }</p>
				<p>Deaths: { this.props.globalStats.total_deaths }</p>
			</div>
		) : <div>Loading Data...</div>
		return (
			<div>
				{ stats }
			</div>
		)
  }
}

export default GlobalStats;
