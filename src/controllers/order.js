const mysql = require('mysql')
const db = require('../db/index.js')

module.exports = {
    getAll: (req, res) => {
        let sql = 'SELECT * FROM order'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    getbyID: (req, res) => {
        let sql = 'SELECT * FROM order WHERE order_id = ?'
        db.query(sql, [req.params.orderId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    }
}