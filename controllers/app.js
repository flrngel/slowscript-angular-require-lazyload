define(["angular", "slowscript", "angular-ui-router"], function(angular,slowscript) {
	"use strict";
	var app = angular.module("mainApp", ["ui.router"]).run(function($rootScope){
		$rootScope.$on('$viewContentLoaded',function(){
			slowscript.execute();
		});
	});

	app.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state("index", {
			url: "",
			views: {
				"contents": {
					templateUrl: "/slowscript-angular-require-lazyload/views/index.html",
					controller: "Index"
				},
			}
		})
		.state("sexy", {
			url: "/sexy",
			views: {
				"contents": {
					templateUrl: "/slowscript-angular-require-lazyload/views/test.html",
					controller: "Sexy",
					reloadOnSearch: true
				}
			}
		});
	});

	app.controller("Index", function($scope) {
		
	});

	app.controller("Sexy", function($scope) {
		slowscript.queue(function(){
			slowscript.$global.sexy($scope);
		});
	});

	return app; 
});
