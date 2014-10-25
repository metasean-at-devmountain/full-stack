var app = angular.module('metaseanPersonal');

app.controller('mainCtrl', function($scope, mainService) {
	$scope.title = "Personal Stuff about MetaSean";

// DISPLAY RELATED VARIABLES

	$scope.showFamily = false;
	$scope.showFriends = false;
	$scope.showHobbies = false;
	$scope.showStats = false;

	$scope.toggleFamily = function() {
		$scope.showFamily = !$scope.showFamily;
	};

	$scope.toggleFriends = function() {
		$scope.showFriends = !$scope.showFriends;
	};

	$scope.toggleHobbies = function() {
		$scope.showHobbies = !$scope.showHobbies;
	};

	$scope.toggleStats = function() {
		$scope.showStats = !$scope.showStats;
	};

	mainService.getFamily().then(function(family) {
		$scope.family = family;
	});

});