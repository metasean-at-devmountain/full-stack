var app = angular.module('metaseanPersonal');

app.factory('mainService', function($http, $q) {

	var factoryReturn = {};

	var deferred = $q.defer();

	// factoryReturn.getFamily = function() {
	// 	$http({
	// 		url: '/family',
	// 		method: 'GET'
	// 	}).then(function(response) {
	// 		console.log(response.data);
	// 		deferred.resolve(response.data);
	// 	});
	// 	return deferred.promise;
	// };

	factoryReturn.getFamily = function() {
		return $http.get('/family').then(function(response) {
			console.log(response.data);
			return response.data;
		})
	};

	// factoryReturn.getFamily = function() {
	// 	$http.get(base_url + 'family').then(function () {
	// 		var results = data;
	// 		console.log(results);
	// 	})
	// 	return deferred.promise;
	// };

	return factoryReturn;
});