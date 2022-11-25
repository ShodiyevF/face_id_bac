const jwt = require('jsonwebtoken');
const { jwtkey } = require('../../config');
const { loginModel } = require("./model");

const loginCtrl = async (req, res) => {
    try {
        if((req.params.login).length > 16){
            res.json({
                status: 404,
                message: 'login bigger in 16'
            })
        } else if ((req.params.password).length > 16) {
            res.json({
                status: 404,
                message: 'password bigger in 16'
            })
        } else {
            const results = await loginModel(req.params)
            if (results == 400) {
                res.json({
                    status: 400,
                    message: 'error'
                })
            } else if (results == 401) {
                res.json({
                    status: 400,
                    message: 'user not found'
                })
            } else {
                console.log(jwtkey);
                res.json({
                    status: 200,
                    message: 'succesfully logined !',
                    token: jwt.sign((await loginModel(req.params)), jwtkey)
                })
            }
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    loginCtrl
}