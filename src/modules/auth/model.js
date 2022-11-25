const { uniqRow } = require("../../lib/pg");

const loginModel = async ({ login, password }) => {
    try {
        const check = await uniqRow('select * from users where user_login = $1 and user_password = $2', login, password)
        console.log(check.rows);
        if (check.rows) {
            if(check.rows.length){
                return check.rows[0]
            } else {
                return 401
            }
        } else {
            return 400
        }
    } catch (error) {
        console.log(error.message, "loginModel");
    }
}

module.exports = {
    loginModel
}