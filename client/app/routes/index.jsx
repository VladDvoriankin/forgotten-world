import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Homepage from '../pages/homepage';
import GameLobby from '../pages/game-lobby';
import Game from '../pages/game';

export default class Routes extends React.PureComponent {
	render() {
		// const {user, loggedIn, logIn} = this.props;
		// const homepageProps = {
		// 	...user,
		// 	loggedIn,
		// 	logIn
		// };

		return (
			<Switch>
				<Route exact path="/" render={() => <Homepage {...this.props}/>}/>
				<Route exact path="/lobby" component={GameLobby}/>
				<Route exact path="/game-:id" component={Game}/>
				<Redirect to="/"/>
			</Switch>
		);
	}
}
