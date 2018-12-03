const createRoom = require('./room');

module.exports = function () {
	const rooms = new Map();
	// const getRandomId = () => 'g' + Math.random().toString(36).substr(2, 9);

	// create lobby room
	rooms.set('lobby', createRoom({id: 'lobby', name: 'lobby'}));

	// TODO REFACTOR?!
	const removeClient = client => rooms.forEach(c => c.removeUser(client));
	const getChatroomByName = chatroomName => rooms.get(chatroomName);
	const serializeChatrooms = () => Array.from(rooms.values()).map(c => c.serialize());

	return {
		removeClient,
		getChatroomByName,
		serializeChatrooms
	};
};
