/**
 * Created by Administrator on 2017/2/27.
 */
module.exports = function (app) {
    require('./login')(app);
    require('./register')(app);
    require('./home')(app);
};