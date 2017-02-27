/**
 * Created by Administrator on 2017/2/27.
 */
module.exports = {
    user: {
        name: { type: String, required: true },
        password: { type: String, required: true },
        email: { type: String, default: true },
        phone: { type: String, default: true }
    }
};