var Storage = require('dom-storage')
  , path = require('path')
  , JsonStorage = require('json-storage')
  , localStorage = new Storage(path.join(__dirname, 'db.json')) // in-file
  , store = JsonStorage.create(localStorage, 'sheriff')
  ;

process.on('exit', function() {
	db.close();
});

module.exports = store;
