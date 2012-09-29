var db = require('../lib/db');

function requireAuthentication(req, res, next) {
	// Check session to see if logged in. If so, next(); if not, respond with a 401 status code.
	res.json({ error: { message: 'None shall pass!'} });
	//next();
}

module.exports = function(app) {

	app.post('/login', function(req, res) {
		// Send req.body.assertion to Mozilla Persona for authentication
		// (see https://developer.mozilla.org/en-US/docs/Persona/Quick_Setup#Step_4.3A_Verify_the_user.E2.80.99s_credentials)
		// If a valid assertion, check to see if email is in the admins table; if so, set up a session for the user.
	});

	app.post('/logout', function(req, res) {
		// Destroy the session
	});

	// Available badges operations

	app.get('/badges_available', requireAuthentication, function(req, res) {
		var badges = db.get('badges') || [];
		res.json(badges);
		// All available badges
	});

	app.get('/badges_available/:id', requireAuthentication, function(req, res) {
		// A particular available badge
	});

	app.post('/badges_available', requireAuthentication, function(req, res) {
		// Create a new badge
	});

	app.put('/badges_available/:id', requireAuthentication, function(req, res) {
		// Update an available badge
	});

	app.delete('/badges_available/:id', requireAuthentication, function(req, res) {
		// Delete an available badge and all associated issued badges
	});

	// Issued badges operations

	app.get('/badges_issued', requireAuthentication, function(req, res) {
		// All issued badges
	});

	app.get('/badges_issued/:id', requireAuthentication, function(req, res) {
		// A particular issued badge
	});

	app.post('/badges_issued', requireAuthentication, function(req, res) {
		// Issue a new
	});

	app.put('/badges_issued/:id', requireAuthentication, function(req, res) {
		// Update an issued badge
	});

	app.delete('/badges_issued/:id', requireAuthentication, function(req, res) {
		// Delete an issued badge
	});

}
