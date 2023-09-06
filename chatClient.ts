var socket : any = require('socket.io-client')('http://localhost:3000');
const repl : any = require('repl');
//const chalk : any = require('chalk');

socket.on('connect', ()=> {
    console.log('----now chat-----');
});

socket.on('disconnect', ()=> {
    socket.emit('disconnect');
});

socket.on('message', (msg : any)=> {
    const {cmd, username} = msg;
    console.log(`${username} says: ${cmd}`);
});

repl.start({
    prompt: '',
    eval: (cmd : any)=> {
        socket.send(cmd);
    }
})
