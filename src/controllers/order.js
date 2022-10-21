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
    },
    update: (req, res) => {
        let data = req.body;
        let productId = req.params.id;
        let sql = 'UPDATE order SET ? WHERE order_id = ?'
        db.query(sql, [data, productId], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update success!' })
        })
    },
    add: (req, res) => {
        const sql = 'INSERT INTO order SET ?'
        db.query(sql, [req.body], (err, response) => {
            if (err) {
                throw err
            }
            res.json({ message: 'Insert success!' })
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM order WHERE order_id = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json({ message: 'Delete success!' })
        })
    }
}