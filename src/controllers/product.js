
// const util = require('util')
const mysql = require('mysql')
const db = require('../db/index.js')

module.exports = {
    getAll: (req, res) => {
        let sql = 'SELECT * FROM product'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    getbyID: (req, res) => {
        let sql = 'SELECT * FROM product WHERE product_id = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let productId = req.params.id;
        let sql = 'UPDATE product SET ? WHERE product_id = ?'
        db.query(sql, [data, productId], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update success!' })
        })
    },
    add: (req, res) => {
        const sql = 'INSERT INTO PRODUCT SET ?'
        db.query(sql, [req.body], (err, response) => {
            if (err) {
                throw err
            }
            res.json({ message: 'Insert success!' })
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM product WHERE product_id = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json({ message: 'Delete success!' })
        })
    }
}
