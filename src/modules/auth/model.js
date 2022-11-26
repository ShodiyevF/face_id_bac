const { uniqRow } = require("../../lib/pg");

const loginModel = async ({ login, password }) => {
    try {
        const check = await uniqRow('select * from users where user_login = $1 and user_password = $2', login, password)
        if (check.rows) {
            if(check.rows.length){
                return check.rows[0].user_id
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

const registerModel = async ({ name, login, password, creator },token) => {
    try {
        const check = await uniqRow('select * from users where user_id = $1 and creator = 1', token.toString())
        const mupper = await uniqRow('select * from users where user_id = $1 and creator = 777', token.toString())
        const findedUser = await uniqRow(`select * from users where user_login = $1`, login)
        if (findedUser.rows.length) {
            return 404
        } else {
            if(mupper.rows.length){
                await uniqRow(`insert into users (user_name, user_login, user_password, creator) values ($1,$2,$3,$4)`, name, login, password, creator)
                return 200
            } else if(check.rows.length){
                const chechCreator = await uniqRow('select * from creator where creater_id = $1', token)
                if(!(chechCreator.rows.length)){
                    await uniqRow(`insert into users (user_name, user_login, user_password) values ($1,$2,$3)`, name, login, password)
                    const lastAdmin = await uniqRow(`select * from users where user_login = $1`, login)
                    await uniqRow(`insert into creator (creater_id, created_id) values ($1,$2)`, token, lastAdmin.rows[0].user_id)
                    return 200
                } else {
                    return 405
                }
            } else {
                return 400
            }
        }
    } catch (error) {
        console.log(error.message, "registerModel");
    }
}

module.exports = {
    loginModel,
    registerModel
}