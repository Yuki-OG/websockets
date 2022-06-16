const http = require('http').createServer((req, res) => {
  res.end('hello, world!');
});

const io = require('socket.io')(http, {
  cors: { origin: '*' }
});

io.on('connection', (socket) => {

  socket.on('message', (message) => {
    io.emit('message', message);
  })
})

http.listen(3000, () => console.log('listening on port 3000'));