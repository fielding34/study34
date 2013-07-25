var app = angular.module('app', [])
	.controller('AppCtrl', ['$scope',
	function($scope) {
		$scope.title = 'Hello World';

		$scope.matrix = initMatrix();

		function initMatrix() {
			var matrix = new Array(7);
			for (var i = 0; i < 7; i++) {
				matrix[i] = [0, 0, 0, 0, 0, 0, 0];
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
		var color = {
			none: 0,
			white: 1,
			black: 2
		};

		$scope.play = function(x, y) {
			if ($scope.matrix[x][y] == 0) {
				var whichColor = global % 2 == 0 ? color.white : color.black;
				$scope.matrix[x][y] = whichColor;
				calculate(x, y, whichColor);
				global++;
				console.log('global: ' + global);
			}
		}

		function calculate(x, y, whichColor) {
			for (var i = 0; i < 6; i++) {
				for (var j = 0; j < 6; j++) {
					var length = i > j ? 7 - i : 7 - j;
					while (length >= 2) {
						if (x >= i && x < i + length && y >= j && y < j + length) {
							if (symmetry(i, j, length)) {
								occupy(i, j, length, whichColor);
								return;
							}
						}
						length--;
					}
				}
			}
		}

		function symmetry(x, y, length) {
			var half = parseInt(length / 2);

			for (var i = y; i < y + length; i++) {
				if ($scope.matrix[x][i] == 0 ||
					($scope.matrix[x][i] != $scope.matrix[x + length - 1][i])) {
					return false;
				}
			}
			console.log(x + ' ' + y + ' ' + length + ' [] ' + $scope.matrix);
			return true;
		}

		function occupy(x, y, length, whichColor) {
			var x2 = x + length;
			var y2 = y + length;
			for (var i = x; i < x2; i++) {
				for (var j = y; j < y2; j++) {
					$scope.matrix[i][j] = whichColor;
				}
			}
		}
	}
]);