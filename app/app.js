/**
 * Created by Administrator on 2017/2/21.
 */
const express = require('express');
const app = express();
const path = require('path');
const bodyParse = require('body-parser');
const cookieParser = require('cookie-parser');

// 定义模板
app.set('view engine', "jade");        // 设置模板引擎
app.set('views', __dirname + '/tpl');   // 设置模板相对路径（相对当前目录）

app.use(cookieParser());
app.use(bodyParse.urlencoded({extended: false}));

// 设置静态路径
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function (req, res) {
    console.log('server is start ');
    res.render('index/index')
});

app.post('/login', function (req, res) {
    console.log('login click');
    console.log(req.body.username);
});

const server = app.listen(8080);