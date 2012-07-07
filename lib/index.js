
var fs    = require('fs');
var path  = require('path');

exports.patchForward = function() {
	if (! fs.exists) {
		fs.exists = function() {
			return path.exists.apply(path, arguments);
		};
		fs.existsSync = function() {
			return path.existsSync.apply(path, arguments);
		};
		return true;
	}
};

exports.patchBackward = function() {
	if (fs.exists) {
		path.exists = function() {
			return fs.exists.apply(fs, arguments);
		};
		path.existsSync = function() {
			return fs.existsSync.apply(fs, arguments);
		};
		return true;
	}
};

exports.patch = function() {
	if (! exports.patchForward()) {
		exports.patchBackward();
	}
};

