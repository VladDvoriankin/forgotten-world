import React from 'react';

import Chat from '../../components/chat';
import LoginPopup from '../../components/login-popup';

class Homepage extends React.PureComponent {
	render() {
		const {logIn} = this.props;

		console.log('homepage', this.props);
		return (
			<React.Fragment>
				<Chat/>
				<LoginPopup logIn={logIn}/>
			</React.Fragment>
		);
	}
}

export default Homepage;
