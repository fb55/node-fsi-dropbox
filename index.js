var Dropbox = require("dropbox"),
    FSI = require("fsi");

var DBFSI = module.exports = function(options){
	this.dbClient = new Dropbox.Client(options);
	FSI.call(this, options);
};

require("util").inherits(DBFSI, FSI);

DBFSI.prototype.readDir = function(path, options, cb){
	this.dbClient.readdir(path, options, cb);
};

DBFSI.prototype.readFile = function(path, options, cb){
	this.dbClient.readFile(path, options, cb);
};

//TODO this only supports strings as data
DBFSI.prototype.writeFile = function(path, data, options, cb){
	this.dbClient.writeFile(path, data, options, cb);
};

//TODO authentication

module.exports = DBFSI;