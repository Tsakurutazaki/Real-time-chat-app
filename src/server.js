
const createServer = require('http').createServer;
const Server = require('socket.io').Server;

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: " * "
    }
});

let users = {};
let userToSocketId = {};

function sendMessagetoSocketId(socketId, message) {
  console.log('send message with socket id', socketId, 'and message', message.message);
  io.to(socketId).emit('data', message);
}

io.on('connection', socket => {
  socket.on('new_user_joined', name => {
    users[socket.id] = name;
    userToSocketId[name] = socket.id;
    console.log(userToSocketId[name]);
    socket.emit('user_joined', name);
    console.log("user", name, "is connected");
  });
})