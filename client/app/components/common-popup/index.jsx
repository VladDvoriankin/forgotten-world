import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

class CommonPopup extends React.PureComponent {
	render() {
		const {children} = this.props;

		console.log('common-popup', this.props);

		return (
			<div style={styles.container}>
				<div style={styles.content}>
					{children}
				</div>
			</div>
		);
	}
}

CommonPopup.propTypes = {
	children: PropTypes.node.isRequired
};

export default CommonPopup;
