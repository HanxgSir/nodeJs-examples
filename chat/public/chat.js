/**
 * Created by Administrator on 2017/2/20.
 */
window.onload = function () {
    var messages = [];
    var socket = io.connect('http://192.168.1.100:8000'); // 改为服务器地址
    var field = document.getElementById("field");
    var sendButton = document.getElementById("send");
    var content = document.getElementById("content");
    var name = document.getElementById("name");

    socket.on('message', function (data) {
        if (data.message) {
            messages.push(data);
            var html = '';
            for (var i = 0; i < messages.length; i++) {
                html += '<b>' + (messages[i].username ? messages[i].username : 'Server') + ': </b>';
                html += messages[i].message + '<br />';
            }
            content.innerHTML = html;
            content.scrollTop = content.scrollHeight;
        } else {
            console.log("There is a problem:", data);
        }
    });

    function sendMessage(){
        if (name.value == "") {
            alert("请先填写你的名字!");
        } else {
            var text = field.value;
            socket.emit('send', {message: text, username: name.value});
        }
    }

    sendButton.onclick = function () {
        sendMessage()
    };

    field.onkeydown = function (e) {
        if(e.keyCode == 13){
            sendMessage();
        }
    };
};