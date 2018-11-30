import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import socket from './socket';
import Layout from './components/layout';
import Routes from './routes';

export default class App extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			user: {
				id: -1,
				name: '',
				character: -1,
				loggedIn: -1
			}
		};

		this.socket = socket();
	}

	render() {
		const {user} = this.state;

		return (
			<BrowserRouter>
				<Layout user={user}>
					<Routes
						user={user}
						logIn={this.logIn}
					/>
				</Layout>
			</BrowserRouter>
		);
	}

	logIn(params) {
		console.log('log-in index', params);
	}
}
