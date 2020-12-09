let createError = require('http-errors')

exports.isLoggedIn = function(req, res, next) {
	if (req.user)
		next();
	else
		next(res.redirect('/login'));
}

exports.hasAuth = function(req, res, next) {
	if (req.user && req.user.is_admin)
		next();
	else
		next(createError(404, "You are not authorized to edit or delete tasks."));
}
