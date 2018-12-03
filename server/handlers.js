function makeHandleEvent(client, userManager, roomManager) {
	function ensureExists(getter, rejectionMessage) {
		return new Promise((resolve, reject) => {
			const res = getter();

			return res
				? resolve(res)
				: reject(rejectionMessage);
		});
	}

	function ensureUserSelected(clientId) {
		return ensureExists(
			() => userManager.getUserByClientId(clientId),
			'select user first'
		);
	}

	function ensureValidChatroom(roomId) {
		return ensureExists(
			() => roomManager.getRoomById(roomId),
			`invalid room id: ${roomId}`
		);
	}

	function ensureValidChatroomAndUserSelected(roomName) {
		return Promise.all([
			ensureValidChatroom(roomName),
			ensureUserSelected(client.id)
		]).then(([room, user]) => Promise.resolve({room, user}));
	}

	function handleEvent(roomName, createEntry) {
		return ensureValidChatroomAndUserSelected(roomName)
			.then(({room, user}) => {
				// append event to chat history
				const entry = {user, ...createEntry()};

				room.addEntry(entry);

				// notify other clients in room
				room.broadcastMessage({chat: roomName, ...entry});
				return room;
			});
	}

	return handleEvent;
}

module.exports = function (client, userManager, roomManager) {
	// const handleEvent = makeHandleEvent(client, userManager, roomManager);

	const handleRegisterUser = (nameAndType, callback) => {
		if (!userManager.isNicknameAvailable(nameAndType.name)) {
			return callback('nickName is not available');
		}

		const user = userManager.createNewUser({id: client.id, ...nameAndType});

		userManager.registerClient(client, user);

		return callback(null, user);
	};

	// const handleJoin = (roomName, callback) => {
	// 	const createEntry = () => ({event: `joined ${roomName}`});

	// 	handleEvent(roomName, createEntry)
	// 		.then(chatroom => {
	// 			// add member to chatroom
	// 			chatroom.addUser(client);

	// 			// send chat history to client
	// 			callback(null, chatroom.getChatHistory());
	// 		})
	// 		.catch(callback);
	// };

	// const handleLeave = (roomName, callback) => {
	// 	const createEntry = () => ({event: `left ${roomName}`});

	// 	handleEvent(roomName, createEntry)
	// 		.then(chatroom => {
	// 			// remove member from chatroom
	// 			chatroom.removeUser(client.id);

	// 			callback(null);
	// 		})
	// 		.catch(callback);
	// };

	// const handleMessage = ({roomName, message} = {}, callback) => {
	// 	const createEntry = () => ({message});

	// 	handleEvent(roomName, createEntry)
	// 		.then(() => callback(null))
	// 		.catch(callback);
	// };

	// const handleGetChatrooms = (_, callback) => callback(null, roomManager.serializeChatrooms());
	// const handleGetAvailableUsers = (_, callback) => callback(null, userManager.getAvailableUsers());
	const handleDisconnect = () => {
		// remove user profile
		userManager.removeClient(client);
		// remove member from all chatrooms
		// REFACTOR?!
		roomManager.removeClient(client);
	};

	return {
		handleRegisterUser,
		// handleJoin,
		// handleLeave,
		// handleMessage,
		// handleGetChatrooms,
		// handleGetAvailableUsers,
		handleDisconnect
	};
};
