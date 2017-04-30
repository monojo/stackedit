define([
	"jquery",
	"underscore",
	"crel",
	"alertify",
	"constants",
	"utils",
	"storage",
	"logger",
	"classes/Provider",
	"settings",
	"eventMgr",
	"fileMgr",
	"fileSystem",
	"editor",
	"helpers/couchdbHelper"
], function($, _, crel, alertify, constants, utils, storage, logger, Provider, settings, eventMgr, fileMgr, fileSystem, editor, evernoteHelper) {

	var PROVIDER_EVERNOTE = "evernote";

	var evernoteProvider = new Provider(PROVIDER_EVERNOTE, "Evernote");

	evernoteProvider.importFiles = function() {
	};
	evernoteProvider.exportFiles = function(){
	};
	evernoteProvider.syncDown = function(){
	};
	evernoteProvider.syncUp = function(){
	};
	return evernoteProvider;
});
