/**
 * Created by Administrator on 2017/2/27.
 */
module.exports = function (app) {
    console.log('login is success');
    app.get('/', function (req, res) {
        console.log('render');
        res.render('login/login')
    })
};