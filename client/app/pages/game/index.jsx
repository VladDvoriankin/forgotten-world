import React from 'react';

class Game extends React.Component {
	render() {
		const {match: {params: {id}}} = this.props;

		return (
			<div>Game {id}</div>
		);
	}
}

export default Game;
