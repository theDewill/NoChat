var http = require('http').createServer();
var io = require('socket.io')(http);
var port = 3000;
io.on('connection', function (socket) {
    console.log('connected');
    socket.on('message', function (msg) {
        console.log(msg);
        socket.broadcast.emit('message', msg);
    });
});
io.on('disconnect', function (evt) {
    console.log('disconnected');
});
http.listen(port, function () { console.log("Listening on port ".concat(port)); });
