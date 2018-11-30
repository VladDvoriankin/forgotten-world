import React from 'react';

class Homepage extends React.Component {
	render() {
		console.log('homepage', this.props);
		return (
			<div>
				<div>chat</div>
				<div>list</div>
				<div>input</div>
				<div>popup</div>
			</div>
		);
	}
}

export default Homepage;
