// const util = require('util')
const mysql = require('mysql')
const db = require('../db/index.js')

module.exports = {
    getAll: (req, res) => {
        let sql = 'SELECT * FROM admin'
        db.query(sql, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    getbyID: (req, res) => {
        let sql = 'SELECT * FROM admin WHERE admin_id = ?'
        db.query(sql, [req.params.adminId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    update: (req, res) => {
        let data = req.body;
        let adminId = req.params.adminId;
        let sql = 'UPDATE admin SET ? WHERE admin_id = ?'
        db.query(sql, [data, adminId], (err, response) => {
            if (err) throw err
            res.json({message: 'Update success!'})
        })
    },
    add: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO admin SET ?'
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json({message: 'Insert success!'})
        })
    }, 
    delete: (req, res) => {
        let sql = 'DELETE FROM admin WHERE admin_id = ?'
        db.query(sql, [req.params.adminId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}