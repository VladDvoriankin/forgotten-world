module.exports = function ({id, name}) {
	const members = new Map();
	let chatHistory = [];

	const broadcastMessage = message => members.forEach(m => m.emit('message', message));
	const addEntry = entry => {
		chatHistory = chatHistory.concat(entry);
	};
	const getChatHistory = () => chatHistory.slice();
	const addUser = client => members.set(client.id, client);
	const removeUser = client => members.delete(client.id);
	const serialize = () => ({
		id,
		name,
		numMembers: members.size
	});

	return {
		broadcastMessage,
		addEntry,
		getChatHistory,
		addUser,
		removeUser,
		serialize
	};
};
