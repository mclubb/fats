var db = require('../db.js')

exports.create = function(fname, lname, username, password, age, height, weight, cb) {
  var values = [fname, lname, username, password, age, height, weight];
  
  db.get().query('INSERT INTO users (firstName, lastName, username, password, age, height, weight) VALUES(?, ?, ?, ?, ?, ?, ?)', values, function(err, result) {
    if (err) return cb(err)
    cb(null, result.insertId)
  })
}

exports.getAll = function(cb) {
  db.get().query('SELECT * FROM users', function (err, rows) {
    if (err) return cb(err)
    cb(null, rows)
  })
}

exports.getAllByUsername = function(username, cb) {
  db.get().query('SELECT * FROM users WHERE username = ?', username, function (err, rows) {
    if (err) return cb(err)
    cb(null, rows)
  })
}