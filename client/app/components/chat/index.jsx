import React from 'react';

import Messages from './messages';
import PlayersList from './players-list';
import Input from './input';

import styles from './styles';

class Chat extends React.Component {
	render() {
		console.log('chat', this.props);
		return (
			<div style={styles.container}>
				<Messages/>
				<PlayersList/>
				<Input/>
			</div>
		);
	}
}

export default Chat;
