var app = angular.module('app', [])
	.controller('AppCtrl', ['$scope',
	function($scope) {
		$scope.title = 'Hello World';

		$scope.matrix = initMatrix();

		function initMatrix() {
			var matrix = new Array(7);
			for (var i = 0; i < 7; i++) {
				matrix[i] = [0, 0, 0, 1, 0, 2, 0];
			}
			return matrix;
		}

		$scope.getClass = function(i, j) {
			if ($scope.matrix[i][j] == 1) {
				return 'white';
			} else if ($scope.matrix[i][j] == 2) {
				return 'black';
			} else {
				return '';
			}
		}

		var global = 0;
		$scope.play = function(i, j) {
			if ($scope.matrix[i][j] == 0) {
				$scope.matrix[i][j] = global % 2 == 0 ? 1 : 2;
				global++;
			}
		}
	}
]);