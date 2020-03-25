import React from 'react';

class GlobalStats extends React.Component {
	// componentDidMount() {
	// 	this.getGlobalStats();
	// }

  render() {
		// console.log("rendering...");
		// console.log("check data", this.state.globalData !== {})
		//
		// const stats = this.state.globalData !== {} ? (
		// 	<div>
		//   	<p>Confirmed: { this.state.globalData.total_cases }</p>
		// 		<p>Recovered: { this.state.globalData.total_recovered }</p>
		// 	  <p>Deaths: { this.state.globalData.total_deaths }</p>
		//   </div>
		// ) : (<div className="center">Loading Data...</div>)
		return (
			<div>
				<h1>Global Stats</h1>
				
			</div>
		)
  }
}

export default GlobalStats;
