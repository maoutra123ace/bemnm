
// const util = require('util')
const mysql = require('mysql')
const db = require('../db/index.js')

module.exports = {
    getAll: (req, res) => {
        let sql = 'SELECT * FROM size'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    getbyID: (req, res) => {
        let sql = 'SELECT * FROM size WHERE size_id = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let sql = 'UPDATE size SET ? WHERE id = ?'
        db.query(sql, [req.body, req.params.id], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update success!' })
        })
    },
    add: (req, res) => {
        let sql = 'INSERT INTO size SET ?'
        db.query(sql, [req.body], (err, response) => {
            if (err) throw err
            res.json({ message: 'Insert success!' })
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM size WHERE id = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json({ message: 'Delete success!' })
        })
    }
}
