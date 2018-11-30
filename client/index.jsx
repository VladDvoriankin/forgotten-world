import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/index';

ReactDOM.render(
	<App />,
	document.getElementById('root')
)

if (module.hot) {
	module.hot.accept('./app', () => {
		// eslint-disable-next-line
		const NewApp = require('./app').default
		ReactDOM.render(
			<NewApp />,
			document.getElementById('root')
		)
	})
}
