/**
 * Created by Administrator on 2017/2/20.
 */
var express = require("express");
var app = express();
var port = 8000;
app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'));
app.get("/", function (req, res) {
    //res.render("page");
    console.log("it works");
});

//app.listen(port);
var io = require('socket.io').listen(app.listen(port));
io.sockets.on('connection', function (socket) {
    socket.emit('message', {message: 'welcome to the chat'});
    socket.on('send', function (data) {
        io.sockets.emit('message', data);
    });
});
console.log("Listening on port " + port);