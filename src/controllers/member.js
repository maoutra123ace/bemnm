
// const util = require('util')
const mysql = require('mysql')
const db = require('../db/index.js')

module.exports = {
    getAll: (req, res) => {
        let sql = 'SELECT * FROM member'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    getbyID: (req, res) => {
        let sql = 'SELECT * FROM member WHERE member_id = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let sql = 'UPDATE member SET ? WHERE member_id = ?'
        db.query(sql, [req.body, req.params.id], (err, response) => {
            if (err) throw err
            res.json({ message: 'Update success!' })
        })
    },
    add: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO member SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({ message: 'Insert success!' })
        })
    },
    delete: (req, res) => {
        let sql = 'DELETE FROM member WHERE member_id = ?'
        db.query(sql, [req.params.id], (err, response) => {
            if (err) throw err
            res.json({ message: 'Delete success!' })
        })
    }
}