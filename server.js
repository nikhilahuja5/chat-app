const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require('socket.io').listen(http);
const Chat = require("./models/schema");
const connect = require("./db/mongoose");
const bodyParser = require("body-parser");



app.use(express.static(__dirname + '/views'))
app.use(bodyParser.json());




app.get('/',(req,res) => {
  res.render('index.ejs');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    // connect chat to database

});

io.on('connection', (socket) => {
  socket.on('chat message', (msg) => {
    //console.log('message: ' + msg);
    io.emit('chat message', msg);

    connect.then(db => {
      console.log("message sent");

      let chatMessage = new Chat({
        message: msg, sender: "client"
      });
      chatMessage.save();
    });
  });
});

PORT = 8000;

http.listen(PORT, () => {
   console.log(`server connected on ${PORT}`)
})