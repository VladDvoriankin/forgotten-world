const server = require('http').createServer();
const io = require('socket.io')(server);
const settings = require('../config/settings');

const UserManager = require('./user-manager');
const RoomManager = require('./room-manager');
const makeHandlers = require('./handlers');

const userManager = UserManager();
const roomManager = RoomManager();

io.on('connection', client => {
	const {
		handleRegisterUser,
		// handleJoin,
		// handleLeave,
		// handleMessage,
		// handleGetChatrooms,
		// handleGetAvailableUsers,
		handleDisconnect
	} = makeHandlers(client, userManager, roomManager);

	// eslint-disable-next-line
	console.log('client connected...', client.id);
	userManager.addClient(client);

	client.on('signin', handleRegisterUser);

	client.on('disconnect', () => {
		// eslint-disable-next-line
		console.log('client disconnect...', client.id);
		handleDisconnect();
	});

	client.on('error', err => {
		// eslint-disable-next-line
		console.log('received error from client:', client.id, err);
	});
});

server.listen(settings.socketServerPort, err => {
	if (err) throw err;
	// eslint-disable-next-line
	console.log(`listening on port ${settings.socketServerPort}`);
});
