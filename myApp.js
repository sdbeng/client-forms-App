angular.module('myApp', [])

.controller('FormCtrl', ['$scope', function($scope){

	$scope.submit = function() {
		console.log('Form Submitted: ', $scope.data);
	};
}]);