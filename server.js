var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/url", (req, res, next) => {
	const polygon = new Polygon(1,2);
	console.log('polygon: ' + polygon);
	res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

io.on('connection', (socketServer) => {
	console.log('connection');
	socketServer.on('npmStop', () => {
		console.log('server exit');
    	process.exit(0);
  });
});

http.listen(8000, function(){
  console.log('listening on *:' + 8000);
});

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
