import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import socket from './socket';
import Layout from './components/layout';
import Routes from './routes';

export default class App extends React.Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			user: null
		};

		this.socket = socket();
	}

	render() {
		return (
			<BrowserRouter>
				<Layout>
					<Routes/>
				</Layout>
			</BrowserRouter>
		);
	}
}
