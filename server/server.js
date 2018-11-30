const server = require('http').createServer();
const io = require('socket.io')(server);
const settings = require('../config/settings');

io.on('connection', client => {
	// eslint-disable-next-line
	console.log('client connected...', client.id);

	client.on('disconnect', () => {
		// eslint-disable-next-line
		console.log('client disconnect...', client.id);
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
