var db = require('sheriff-db');

module.exports = function getCriteria(id) {
	// Return badges_available.criteria where badges_issued.id = id AND badges_available.rowid = badges_issued.badge_id
	// Return null if no badge or no criteria
}