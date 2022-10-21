const mysql = require('mysql')
const express = require('express')
const app = express()
const port = 3000
const router = express.Router();

app.use(express.json())

let routes = require('../api-routes/routeBasic.js') //importing route
routes(app)

// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'})
// })

app.listen(3000)
