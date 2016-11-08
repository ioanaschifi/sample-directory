var myApp = angular.module('myApp', []);

myApp.controller('MyController', function MyController($scope){
	$scope.author = {
		'name': 'Ioana Schifirnet', 
		'title': 'Staff Music Curator',
		'company': 'Spotify' 
	}
});