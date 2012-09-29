var sqlite3 = require('sqlite3');

// TODO: If ../../data/db.sqlite doesn't exist, copy sheriff-schema.sqlite to ../../data/db.sqlite

var db = new sqlite3.Database(__dirname + '/../../data/db.sqlite');

process.on('exit', function() {
	db.close();
});

module.exports = db;