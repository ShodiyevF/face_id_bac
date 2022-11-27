const { workerPostModel, workerImageGetModel } = require("./model");

const workerPostCtrl = async (req, res) => {
    try {
        await workerPostModel(req.body, req.files.image)
    } catch (error) {
        console.log(error.message, 'workerPostCtrl');
    }
}

const workerImageGetCtrl = async (req, res) => {
    try {
        workerImageGetModel()
    } catch (error) {
        console.log(error.message, 'workerImageGetCtrl');
    }
}

module.exports = {
    workerPostCtrl,
    workerImageGetCtrl
}