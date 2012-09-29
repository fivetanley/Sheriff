var express = require('express'),
	app = express(),
	settings = require('./lib/settings');

app.set('port', process.env.PORT || 3000);

app.use(express.logger('dev'));

app.use(express.favicon(__dirname + '/ui/static/favicon.ico'));

// Redirect to add trailing slash, otherwise relative URLs will resolve to the wrong URL
// TODO: make these routes respect settings.get('urls')
app.all(/^\/admin$/, function(req, res) { res.redirect('/admin/'); });
app.use('/admin/', require('./ui'));
app.use('/badges', require('./badges'));
app.use('/api', require('./api'));

if (app.get('env') === 'development') {
	app.use(express.errorHandler());
};

app.listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
