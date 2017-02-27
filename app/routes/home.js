/**
 * Created by Administrator on 2017/2/27.
 */
module.exports = function (app) {
    app.route('/home').get(function (req, res) {
        res.render('home/home');
    })
};