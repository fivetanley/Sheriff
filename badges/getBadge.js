var db = require('sheriff-db'),
	_ = require('lodash'),
	settings = require('sheriff-settings');

module.exports = function getBadge(id) {
	// Start with:
	// 
	// var badge = {
	// 	badge: {
	// 		issuer: settings.get('issuer')
	// 	}
	// }

	// Get the right badges_issued and badges_available from the db
	// (badges_issued.rowid = id AND badges_available.rowid = badges_issued.badge_id)

	// return _.merge(badge, badges_available.json, badges_issued.json);

	// If the badge doesn't exist, return null.
}