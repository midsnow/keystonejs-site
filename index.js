/**
 * This script launches the KeystoneJS Docs website using express.
 */

var production = (process.env.NODE_ENV === 'production');
var _ = require('lodash');
var errorHandler = require('errorhandler');
var express = require('express');
var favicon = require('serve-favicon');
var less = require('less-middleware');
var logger = require('morgan');
var i18n = require('i18n');
var cookieParser = require('cookie-parser');

var content = require('./content');

//var classReference = require('./content/common/apiMarked');
var defaultLocale = 'en';
var languages = [defaultLocale, 'zh', 'es'];

i18n.configure({
	locales: languages,
	// language json file path
	directory: __dirname + '/locales',
	// default language
	defaultLocale: defaultLocale,
	// define a custom cookie name to parse locale settings from 
	cookie: 'i18n'
});

var app = express();

app.set('port', process.env.PORT || 8080);
app.set('views', 'content');
app.set('view engine', 'jade');

app.use(cookieParser("i18n"));
app.use(i18n.init);

app.use(favicon('public/favicon.ico'));
app.use(less('public'));
app.use(express.static('public'));

app.use(logger('dev'));

// disable cache, safari workaround
// see http://stackoverflow.com/questions/18811286/nodejs-express-cache-and-304-status-code
app.use(function(req, res, next) {
	res.header("Cache-Control", "no-cache, no-store, must-revalidate");
	res.header("Pragma", "no-cache");
	res.header("Expires", 0);
	next();
});

// Set up locals and routes
app.locals.languages = content.languages;
app.locals.version = require('./package.json').version;

languages.forEach(function(lang) {
	app.get('/' + lang + '/:uri1?/:uri2?', function (req, res) {
		console.log('set cookie', lang);
		res.cookie('i18n', lang);
		var link = '/' + req.params.uri1;
		if(req.params.uri2) {
			link += '/' + req.params.uri2;
		}
		res.redirect(link);
	});
});

app.get('/:uri1?/:uri2?', function (req, res) {
	if(!req.cookies.i18n) {
		console.log('set cookie', defaultLocale);
		res.cookie('i18n', defaultLocale);
		res.setLocale(defaultLocale);
	}
	var options = false;
	var link = '/';
	if(req.params.uri1) {
		link += req.params.uri1;
	}
	if(req.params.uri2) {
		link += '/' + req.params.uri2;
	}
	console.log(link);
	options = content.routes[link];
	if(options) {
		// load jade template
		console.log('set locale', req.cookies.i18n);
		res.setLocale(req.cookies.i18n);
		view(options.template, options, res, req.cookies.i18n)
	} else {
		// 404
		res.status(404).render('en/pages/404');
	}
});

app.use(function(req, res, next) {
	res.status(404).render('404');
});

app.use(errorHandler());

// Start server
app.listen(app.get('port'), function() {
  console.log('Keystone docs are available on port ' + app.get('port'));
});

function view(view, options, res, lang) {
	options.pretty = true;
	_.extend(options, content.languages[lang]);
	options.__ = res.__;
	options.language = lang;	
	res.render('en/pages/' + view, options);
}
