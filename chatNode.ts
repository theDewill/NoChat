const http : any = require('http').createServer();
const io : any = require('socket.io')(http);
const port : Number = 3000;

io.on('connection', (socket)=>{
    console.log('connected');
    socket.on('message', (msg : any)=> {
        console.log(msg);
        socket.broadcast.emit('message', msg);
    })
})

io.on('disconnect', (evt)=> {
    console.log('disconnected');
})

http.listen(port, ()=> {console.log(`Listening on port ${port}`)});