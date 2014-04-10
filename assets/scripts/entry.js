requirejs.config({
	baseUrl: "/slowscript-angular-require-lazyload/controllers/",
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
		"slowscript": "/slowscript-angular-require-lazyload/assets/scripts/slowscript",
		"jquery": "/slowscript-angular-require-lazyload/assets/scripts/jquery-2.1.0.min",
		"angular": "/slowscript-angular-require-lazyload/assets/scripts/angular.min",
		"angular-ui-router": "/slowscript-angular-require-lazyload/assets/scripts/angular-ui-router.min"
	}
});

require(["jquery", "angular","slowscript", "app"], function($, angular,slowscript){
	$(function(){
		angular.bootstrap(document, ["mainApp"]);
	});
});
