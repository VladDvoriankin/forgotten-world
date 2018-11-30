import React from 'react';

class Chat extends React.Component {
	render() {
		console.log('chat', this.props);
		return (
			<div>
				<div>chat</div>
				<div>list</div>
				<div>input</div>
			</div>
		);
	}
}

export default Chat;
