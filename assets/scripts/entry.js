requirejs.config({
	baseUrl: "/controllers/",
	shim: {
		"angular": {
			deps: ["jquery"],
			exports: "angular"
		},
		"angular-ui-router": {
			deps: ["angular"]
		},
		"app": {
			deps: ["angular"]
		}
	},
	paths: {
		"slowscript": "/assets/scripts/slowscript",
		"jquery": "/assets/scripts/jquery-2.1.0.min",
		"angular": "/assets/scripts/angular.min",
		"angular-ui-router": "/assets/scripts/angular-ui-router.min"
	}
});

require(["jquery", "angular","slowscript", "app"], function($, angular,slowscript){
	$(function(){
		angular.bootstrap(document, ["mainApp"]);
	});
});
