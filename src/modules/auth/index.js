const { loginCtrl } = require('./ctrl')

const express = require('express').Router()

express.get('/login/:login/:password', (req, res) => loginCtrl(req, res))

module.exports = express