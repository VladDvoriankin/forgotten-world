import React from 'react';
import PropTypes from 'prop-types';
import characters from '../../../../config/characters';

import styles from './styles';

const CHARACTERS_KEYS = Object.keys(characters);

class LoginPopup extends React.PureComponent {
	render() {
		const {onChange, type} = this.props;

		return (
			<div>
				{CHARACTERS_KEYS.map(key => (
					<button
						key={key}
						type="button"
						onClick={() => onChange('type', parseInt(key, 10))}
						style={type === key ? styles.currentButton : {}}
					>
						{characters[key].name}
					</button>
				))}
			</div>
		);
	}
}

LoginPopup.propTypes = {
	onChange: PropTypes.func.isRequired,
	type: PropTypes.number.isRequired
};

export default LoginPopup;
