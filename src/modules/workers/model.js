const path = require('path')
const fs = require('fs')
const { uniqRow } = require('../../lib/pg')

const workerPostModel = async ({ fish, age, address, tel, salary, salary_hour, branch, admin_id }, image) => {
    try {
        const query = `
        select
        *
        from 
        `
        const branch = await uniqRow('select * from ')
        
        const ima = image
        if (ima.mimetype == 'image/jpeg') {
            ima.mv(path.join(__dirname, '../', '../', '../', '../', 'face_images/') + ima.name, (err) => {
                if(err){
                    console.log(err);
                } else {
                    console.log('fileuploaded');
                }
            })
        }
    } catch (error) {
        console.log(error.message, 'workerPostModel');
    }
}

const workerImageGetModel = async () => {
    try {
        fs.readdir(path.join(__dirname, '../', '../', '../', '../', 'face_images/'), (err, files) => {
            if (err)
              console.log(err);
            else {
              files.forEach(file => {
                console.log(file);
              })
            }
          })
    } catch (error) {
        console.log(error.message, 'workerImageGetModel');
    }
}

module.exports = {
    workerPostModel,
    workerImageGetModel
}