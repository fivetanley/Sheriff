var settingsPath = '../../data/settings.json';

// TODO: if settingsPath doesn't exist yet, copy it from settings_default.json

var settings = require(settingsPath);

exports.get = function(key) {
	return settings[key];
}

exports.set = function(key, value) {
	settings[key] = value;
	// TODO: fs.writeFile JSON.stringify(settings) back to settingsPath
}