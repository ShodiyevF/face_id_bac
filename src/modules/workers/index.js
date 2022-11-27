const { workerPostCtrl, workerImageGetCtrl } = require('./ctrl')

const express = require('express').Router()

express.post('/worker/image/post', (req, res) => workerPostCtrl(req, res))
express.get('/worker/image/get', (req, res) => workerImageGetCtrl(req, res))

module.exports = express