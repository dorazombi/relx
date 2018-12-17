const io = require('socket.io-client');
const socketClient = io.connect('http://localhost:8000');

socketClient.on('connect', () => {
	console.log("connect");
	socketClient.emit('npmStop');
	setTimeout(() => {
		console.log("server stop exit");
    	process.exit(0);
	}, 1000);
});