import settings from '../../config/settings';

const io = require('socket.io-client');

export default function () {
	const socket = io.connect(settings.socketServerUrl);

	const registerHandler = onMessageReceived => socket.on('message', onMessageReceived);
	const unregisterHandler = () => socket.off('message');

	socket.on('error', error => (
		// eslint-disable-next-line
		console.error('SOCKET:', error))
	);

	const signin = (nameAndType, callback) => socket.emit('signin', nameAndType, callback);

	return {
		registerHandler,
		unregisterHandler,
		signin
	};
}
