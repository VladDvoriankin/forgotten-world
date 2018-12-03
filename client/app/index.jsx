import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import socket from './socket';
import Layout from './components/layout';
import Routes from './routes';

export default class App extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			loggedIn: false,
			user: {
				name: '',
				character: -1
			}
		};

		this.socket = socket();
		this.logIn = this.logIn.bind(this);
	}

	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Routes
						{...this.state}
						logIn={this.logIn}
					/>
				</Layout>
			</BrowserRouter>
		);
	}

	logIn(nameAndType) {
		this.socket.signin(nameAndType, (err, user) => {
			if (err) {
				return console.error(err);
			}

			console.log('registered', user);
			this.setState({
				loggedIn: true,
				user
			});
		});
	}
}
