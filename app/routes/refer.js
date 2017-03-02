/**
 * Created by Administrator on 2017/2/28.
 */
module.exports = function (app) {
    app.route('/refer').get(function (req, res) {
        if (req.session.user) {
            res.render('refer/refer');
        }
        else {
            res.redirect('/');
        }
    });

    app.post('./refer', function (req, res) {

    })
};