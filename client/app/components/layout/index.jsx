import React from 'react';
import PropTypes from 'prop-types';
// import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import styles from './styles';

class Layout extends React.Component {
	render() {
		const {children} = this.props;

		return (
			<div style={styles.container}>
				{children}
			</div>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
