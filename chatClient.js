var socket = require('socket.io-client')('http://localhost:3000');
var repl = require('repl');
//const chalk : any = require('chalk');
socket.on('connect', function () {
    console.log('----now chat-----');
});
socket.on('disconnect', function () {
    socket.emit('disconnect');
});
socket.on('message', function (msg) {
    var cmd = msg.cmd, username = msg.username;
    console.log("".concat(username, " says: ").concat(cmd.split('\n')[0]));
});
repl.start({
    prompt: '',
    eval: function (cmd) {
        socket.send(cmd);
    }
});
