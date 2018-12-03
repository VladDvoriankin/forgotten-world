const userTemplate = require('../config/default-user');

module.exports = function () {
	// mapping of all connected clients
	const clients = new Map();
	const createNewUser = ({name, type: characterType}) => ({
		...userTemplate,
		name,
		characterType,
		loggedIn: new Date().getTime()
	});
	const addClient = client => clients.set(client.id, {client});
	const registerClient = (client, user) => clients.set(client.id, {user, client});
	const removeClient = client => clients.delete(client.id);
	const isNicknameAvailable = userName => {
		let available = true;

		// eslint-disable-next-line
		for (const [key, value] of clients) {
			if (value === userName) {
				available = true;
				break;
			}
		}

		return available;
	};

	return {
		createNewUser,
		addClient,
		registerClient,
		removeClient,
		isNicknameAvailable
	};
};
