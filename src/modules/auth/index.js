const { loginCtrl, registerCtrl } = require('./ctrl')

const express = require('express').Router()

express.get('/login/:login/:password', (req, res) => loginCtrl(req, res))
express.get('/register', (req, res) => registerCtrl(req, res))

module.exports = express