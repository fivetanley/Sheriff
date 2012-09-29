var db = require('../lib/db'),
	getBadge = require('./getBadge.js'),
	getCriteria = require('./getCriteria.js');

module.exports = function(app) {

	app.get('/:id', function(req, res, next) {
		var badge = getBadge(req.params.id);
		if (badge)
			res.send(badge);
		else
			return next();
	});

	app.get('/:id/criteria', function(req, res) {
		var criteria = getCriteria(req.params.id);
		if (criteria)
			res.render('criteria', criteria);
		else
			return next();
	});

}