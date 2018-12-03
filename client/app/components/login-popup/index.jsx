import React from 'react';
import PropTypes from 'prop-types';
import CommonPopup from '../common-popup';
import FormName from './form-name';
import FormType from './form-type';

class LoginPopup extends React.PureComponent {
	constructor(props) {
		super(props);

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	render() {
		const {name, type, valid} = this.state;

		return (
			<CommonPopup>
				<h1>Hello there</h1>
				<p>Please introduce yourself:</p>
				<FormName value={name} onChange={this.onChange}/>
				<FormType type={type} onChange={this.onChange}/>
				<button
					type="button"
					onClick={this.onSubmit}
					disabled={!valid}
				>
					Yep!
				</button>
			</CommonPopup>
		);
	}

	onChange(key, value) {
		const {name, type} = this.state;

		this.setState({
			[key]: value,
			valid: this.validate({name, type, [key]: value})
		});
	}

	onSubmit() {
		const {logIn} = this.props;
		const {valid, ...nameAndType} = this.state;

		if (valid) {
			logIn(nameAndType);
		}
	}

	validate = ({name, type}) => type > -1 && name.toString().length > 2;

	state = {
		name: '',
		type: -1,
		valid: false
	};
}

LoginPopup.propTypes = {
	logIn: PropTypes.func.isRequired
};

export default LoginPopup;
