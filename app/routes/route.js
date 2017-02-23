/**
 * Created by Administrator on 2017/2/23.
 */
module.exports = function (app) {
    // 处理第一次打开时的请求
    app.get('/', function (req, res) {
        console.log('server is start ');
        res.render('login/login')
    });

    // 登录
    app.post('/login', function (req, res) {
        console.log('login click');
        console.log(req.body.username);
        console.log(req.body.password);
        res.send({status: 0, msg: '登录成功'});
    });

    app.route('/register')
        .get(function (req, res) {
            res.render('register/register');
        });
};