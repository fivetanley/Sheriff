var express = require('express'),
	app = express();

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser(process.env.COOKIE_SECRET || 'byuFTW'));
app.use(express.session());
app.use(app.router);

require('./routes.js')(app);

module.exports = app;