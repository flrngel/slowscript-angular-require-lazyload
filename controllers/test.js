require(['angular','slowscript'],function(angular,slowscript){
	slowscript.$global.sexy=(function($scope){
		console.log("tada~");
		$scope.univs = [{"idx": 1,"name": "asdf"}, {"idx": 2,"name": "bsdf"}];
		$scope.$apply();
	});
	slowscript.queue_execute();
});
