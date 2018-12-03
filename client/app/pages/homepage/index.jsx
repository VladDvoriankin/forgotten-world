import React from 'react';
import PropType from 'prop-types';

import Chat from '../../components/chat';
import LoginPopup from '../../components/login-popup';

class Homepage extends React.PureComponent {
	render() {
		const {loggedIn, logIn, user} = this.props;

		console.log('homepage', this.props);
		return (
			<React.Fragment>
				<Chat loggedIn={loggedIn} user={user} />
				{!loggedIn && <LoginPopup logIn={logIn}/>}
			</React.Fragment>
		);
	}
}

Homepage.propTypes = {
	loggedIn: PropType.bool.isRequired,
	logIn: PropType.func.isRequired,
	user: PropType.object.isRequired
};

export default Homepage;
