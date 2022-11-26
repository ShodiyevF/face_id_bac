const jwt = require('jsonwebtoken');
const { jwtkey } = require('../../config');
const { loginModel, registerModel } = require("./model");

const loginCtrl = async (req, res) => {
    try {
        if((req.params.login).length > 16){
            res.json({
                status: 404,
                message: 'login 16 ta harifdan kotta'
            })
        } else if ((req.params.password).length > 16) {
            res.json({
                status: 404,
                message: 'password 16 ta harifdan kotta'
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
                    message: 'user topilmadi'
                })
            } else {
                res.json({
                    status: 200,
                    message: 'muvaffaqiyatli kirdi !',
                    token: jwt.sign((await loginModel(req.params)), jwtkey)
                })
            }
        }
    } catch (error) {
        console.log(error.message, 'loginCtrl');
    }
}

const registerCtrl = async (req, res) => {
    try {
        if (!(req.body.name)) {
            res.json({
                status: 404,
                message: 'name topilmadi !'
            })
        } else if ((req.body.name).length > 36) {
            res.json({
                status: 404,
                message: 'name 36 ta harfdan kop'
            })
        } else if ((req.body.name).length < 8) {
            res.json({
                status: 404,
                message: 'name 8 ta harfdan kam'
            })
        } else if(!(req.body.login)){
            res.json({
                status: 404,
                message: 'login topilmadi !'
            })
        } else if ((req.body.login).length > 16) {
            res.json({
                status: 404,
                message: 'login 16 ta harfdan kop'
            })
        } else if ((req.body.login).length < 4) {
            res.json({
                status: 404,
                message: 'login 4 ta harfdan kam'
            })
        } else if (!(req.body.password)) {
            res.json({
                status: 404,
                message: 'password topilmadi !'
            })
        } else if ((req.body.password).length > 16) {
            res.json({
                status: 404,
                message: 'password 16 ta harfdan kop'
            })
        } else if ((req.body.password).length < 4) {
            res.json({
                status: 404,
                message: 'password 4 ta harfdan kam'
            })
        } else if (!(req.body.creator)) {
            res.json({
                status: 404,
                message: 'creator topilmadi !'
            })
        } else if (+(req.body.creator) != 0 && +(req.body.creator) != 1) {
            res.json({
                status: 404,
                message: 'creator da hatolik bor !'
            })
        } else {
            const results = await registerModel(req.body, jwt.verify(req.body.token, jwtkey))
            if (results == 404) {
                res.json({
                    status: 400,
                    message: 'bu user bazada bor ekan !'
                })
            } else if (results == 401) {
                res.json({
                    status: 400,
                    message: 'siz admin emassiz !'
                })
            } else if (results == 405) {
                res.json({
                    status: 400,
                    message: `siz admin qo'shib bo'lgansiz !`
                })
            } else {
                res.json({
                    status: 200,
                    message: 'muvaffaqiyatli rohyatdan otdi !',
                })
            }
        }
    } catch (error) {
        console.log(error.message, 'registerCtrl');
    }
}

module.exports = {
    loginCtrl,
    registerCtrl
}