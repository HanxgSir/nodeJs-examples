/**
 * Created by Administrator on 2017/2/27.
 */
module.exports = function (app) {
    app.route('/home').get(function (req, res) {
        if (req.session.user) {
            res.render('home/home');
        }
        else {
            res.redirect('/');
        }
    });

    app.post('/home', function (req, res) {
        let bug = global.dbHelper.getModel('bug');
        bug.find(function (error, docs) {
            console.log(docs);
            res.send({bugs: docs,status:'0'});
        })
    })
};