var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/',function(req,res){
    res.sendFile('/home/saddu/CorporateTraining/NodeJS and React JS/my_workspace/nodejs/web-sockets/demo/index.html');
})

io.on('connection',function(socket){
    console.on('A user connected');
    socket.on('disconnect',function(){
        console.log('User disconnected')
    })
})

http.listen(4000,function(){
    console.log('listening on port : 4000')
})