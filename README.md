# slowscript-angular-require-lazyload

simple example of javascript lazyload with using [slowscript](https://github.com/flrngel/slowscript) for whom using [AngularJS](http://angularjs.org/) and [RequireJS](http://requirejs.org)

I have not tested non-requirejs environment, but it might work.

## Example

click [here](http://flrngel.github.io/slowscript-angular-require-lazyload/) to see example

## Concepts

Using [slowscript](https://github.com/flrngel/slowscript)'s `queue`, `queue_excute`, `execute` functions, AngularJS's `$rootScope` Concept, Run function

We could lazyload javascript which is descripted as HTML-TAG in view-file !!

## Summing-up core of Example (for who don't have enough time to read few lines of code)

/index.html

	<script src="/assets/scripts/require.min.js" data-main="/assets/scripts/entry.js"></script>

/controllers/app.js

	app = angular.module("mainApp", ["ui.router"]).run(function($rootScope){
		$rootScope.$on('$viewContentLoaded',function(){
			slowscript.execute();
		});
	});
	app.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider.state("sexy", {
			url: "/sexy",
			views: {
				"contents": {
					templateUrl: "/views/test.html",
					controller: "Sexy",
					reloadOnSearch: true
				}
			}
		});
	});
	app.controller("Sexy", function($scope) {
		slowscript.queue(function(){
			slowscript.$global.sexy($scope);
		});
	});

/assets/scripts/entry.js

	require(["jquery", "angular","slowscript", "app"], function($, angular,slowscript){
		$(function(){
			angular.bootstrap(document, ["mainApp"]);
		});
	});

/controllers/test.js
	
	require(['angular','slowscript'],function(angular,slowscript){
		slowscript.$global.sexy=(function($scope){
			console.log("tada~");
			$scope.univs = [{"idx": 1,"name": "asdf"}, {"idx": 2,"name": "bsdf"}];
			$scope.$apply();
		});
		slowscript.queue_execute();
	});

/views/test.html

	<noscript src="/controllers/test.js" type="text/slowscript"></noscript>
