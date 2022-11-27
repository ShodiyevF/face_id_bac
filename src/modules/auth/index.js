const { loginCtrl, registerCtrl } = require('./ctrl')

const express = require('express').Router()

express.get('/auth/login/:login/:password', (req, res) => loginCtrl(req, res))
express.get('/auth/register', (req, res) => registerCtrl(req, res))

module.exports = express