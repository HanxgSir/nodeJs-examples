/**
 * Created by Administrator on 2017/2/23.
 */
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/test'); //连接到一个test的数据库
db.connection.on('error', function(error) {
    console.log(error);
});
db.connection.on("open", function () {
    console.log("——数据库连接成功！——");
});
module.exports = function (app) {
    // 处理第一次打开时的请求
    //app.get('/', function (req, res) {
    //    console.log('server is start ');
    //    res.render('login/login')
    //});

    // 登录页路由
    app.route('/')
        .get(function (req, res) {
            res.render('login/login')
        });

    // 登录
    app.post('/login', function (req, res) {
        console.log('login click');
        console.log(req.body.username);
        console.log(req.body.password);
        res.send({status: 0, msg: '登录成功'});
    });

    // 注册页路由
    app.route('/register')
        .get(function (req, res) {
            res.render('register/register');
        });

    // 注册
    app.post('/register', function (req, res) {
        console.log('register click');
        console.log(req.body);
        var UserSchema = new mongoose.Schema({
            email:{type:String},
            password:{type:Number},
            nickname:{type:String},
            phone:{type:String}
        });
        var UserModel = db.model('User',UserSchema);
        var UserEntity = new UserModel({name:'User'});
        UserEntity.save();
        res.send({status:0})
    })
};