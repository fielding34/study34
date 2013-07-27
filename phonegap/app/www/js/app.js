var app = angular.module('app', [])
	.controller('AppCtrl', ['$scope', '$timeout',
	function($scope, $timeout) {
		$scope.title = 'Hello World';

		$scope.matrix = initMatrix();

		function initMatrix() {
			var matrix = new Array(7);
			for (var i = 0; i < 7; i++) {
				matrix[i] = [0, 0, 0, 0, 0, 0, 0];
			}
			return matrix;
		}

		$scope.getColor = function(i, j) {
			var value = $scope.matrix[i][j];
			if (value == 1) {
				return 'white';
			} else if (value == 2) {
				return 'black';
			} else if (value == 3) {
				return 'white blink';
			} else if (value == 4) {
				return 'black blink';
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


		$scope.reset = function() {
			global = 0;
			$scope.matrix = initMatrix();
		}


		$scope.play = function(x, y) {
			if ($scope.matrix[x][y] == color.none) {
				var whichColor = global % 2 == 0 ? color.white : color.black;
				$scope.matrix[x][y] = whichColor;
				calculate(x, y, whichColor);
				global++;
				console.log('global: ' + global);
			}

			if (global == 49) {
				determineWhoWin();
			}
		}

		function determineWhoWin() {
			var white = 0;
			for (var i = 0; i < 7; i++) {
				for (var j = 0; j < 7; j++) {
					white += ($scope.matrix[i][j] == color.white ? 1 : 0);
				}
			}
			var black = 49 - white;
			if (white > black) {
				$scope.result = 'white win (white ' + white + '> black ' + black + ')'
			} else {
				$scope.result = 'black win (white ' + white + '< black ' + black + ')'
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
			// console.log(x + ', ' + y + ' (' + length + '), matrix[] ' + $scope.matrix);
			return symmetryX(x, y, length) || symmetryY(x, y, length);
		}


		function symmetryX(x, y, length) {
			var half = parseInt(length / 2) + (length % 2 == 0 ? 0 : 1);
			var white = 0;
			var black = 0;

			for (var i = x; i < x + half; i++) {
				for (var j = y; j < y + length; j++) {
					var i_ = 2 * x + length - 1 - i;
					if ($scope.matrix[i][j] == color.none || $scope.matrix[i][j] != $scope.matrix[i_][j]) {
						return false;
					}

					if ($scope.matrix[i][j] == color.white) {
						white++;
					} else if ($scope.matrix[i][j] == color.black) {
						black++;
					}
				}
			}
			console.log('x.....');
			return white > 0 && black > 0;
		}

		function symmetryY(x, y, length) {
			var half = parseInt(length / 2) + (length % 2 == 0 ? 0 : 1);
			var white = 0;
			var black = 0;

			for (var i = x; i < x + length; i++) {
				for (var j = y; j < y + half; j++) {
					var j_ = 2 * y + length - 1 - j;
					if ($scope.matrix[i][j] == color.none || $scope.matrix[i][j] != $scope.matrix[i][j_]) {
						return false;
					}

					if ($scope.matrix[i][j] == color.white) {
						white++;
					} else if ($scope.matrix[i][j] == color.black) {
						black++;
					}
				}
			}
			console.log('Y.....');
			return white > 0 && black > 0;
		}

		function occupy(x, y, length, whichColor) {
			var x2 = x + length;
			var y2 = y + length;
			for (var i = x; i < x2; i++) {
				for (var j = y; j < y2; j++) {
					$scope.matrix[i][j] = $scope.matrix[i][j] + 2;
				}
			}
			$timeout(function() {
				for (var i = x; i < x2; i++) {
					for (var j = y; j < y2; j++) {
						$scope.matrix[i][j] = whichColor;
					}
				}
			}, 2000);
		}
	}
]);