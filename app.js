const express = require("express")
const app = express()
const path = require('path')
// Socket.IO setup
const http = require('http')
const socketio = require('socket.io')
const server= http.createServer(app)
const io = socketio(server)

io.on('connection',function(socket){
    socket.on('send-location', function(data){
        io.emit("received-location",{id:socket.id, ...data})
    })
    console.log('a user connected')
   socket.on('disconnect',function (socket) {
     io.emit('user-disconnected',socket.id)
    
   })
})

// ejs setup
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname, 'public')));
app.get('/',function (req,res) {
    res.render("index")
    
})
server.listen(3000)