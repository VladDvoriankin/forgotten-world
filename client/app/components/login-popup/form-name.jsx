import React from 'react';
import PropTypes from 'prop-types';

class LoginPopup extends React.PureComponent {
	render() {
		const {value, onChange} = this.props;

		return (
			<input
				placeholder="Nickname"
				value={value}
				onChange={({target: {value: inputValue}}) => onChange('name', inputValue)}
			/>
		);
	}
}

LoginPopup.propTypes = {
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
};

export default LoginPopup;
