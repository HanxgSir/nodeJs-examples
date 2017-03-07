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

    app.post('/getBugs', function (req, res) {
        let bug = global.dbHelper.getModel('bug');
        let code = req.body.code;
        let level = req.body.level;
        let status = req.body.status;
        let filter = {};
        console.log(level);
        if (level != 0) {
            filter.level = level;
        }
        if (code != '') {
            filter.code = code;
        }
        if (status != -1) {
            filter.deleted = status;
        }
        bug.find(filter, function (error, docs) {
            console.log(docs);
            res.send({bugs: docs, status: '0'});
        })
    })
};