angular.module('myApp', [])

.controller('FormCtrl', ['$scope', function($scope){

	$scope.submit = function() {
		if ($scope.myForm.$validate) {
			console.log("The form is valid");
		}else {
			console.log("The form is invalid");
		}
		// console.log('Form Submitted: ', $scope.data);
	};
}]);