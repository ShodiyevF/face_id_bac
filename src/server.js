const express = require('express')
const fileupload = require('express-fileupload')

const app = express()

app.use(fileupload())
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader("Access-Control-Allow-Credentials", "true")
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, token");
    next()
})

const auth = require('./modules/auth')
const workers = require('./modules/workers')

app.use(auth)
app.use(workers)

// app.post('/upload', async (req, res) => {
//     try {
//         console.log(req.files);
//     } catch (error) {
//         console.log(error.message, 'upload');
//     }
// })

app.listen(4000,  console.log(4000))