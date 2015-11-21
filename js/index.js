var app = angular.module('Prompto', ['ngResource', 'ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: "LoginCtrl"
		})
    .when('/', {
			templateUrl: 'views/dashboard.html',
			controller: "DashboardCtrl"
		})
		.when('/tasks/day', {
			templateUrl: 'views/task-daily.html',
			controller: "TasksDayCtrl"
		})
		.when('/tasks/week', {
			templateUrl: 'views/task-weekly.html',
			controller: "TasksWeekCtrl"
		})
  .otherwise({
			redirectTo: '/'
		});
});

app.controller('HeaderCtrl', function ($scope) {
	$scope.message = 'Harriet\'s Promptos';
});

app.controller('LoginCtrl', function ($scope) {
});

app.controller('TasksDayCtrl', function ($scope, $http) {
	$http.get('https://prompto.smileupps.com/tasks/_design/tasks/_view/all')
    .success(function (response){
	    $scope.tasks = response.rows;
    });

	$scope.taskClick = function (){
		console.log("clciked.");
	};
});

app.controller('TasksWeekCtrl', function ($scope, $http) {
	$http.get('https://prompto.smileupps.com/tasks/_design/tasks/_view/all')
    .success(function (response){
	    $scope.tasks = response.rows;
    });
});

app.controller('DashboardCtrl', function ($scope, $resource) {

	$scope.taskClick = function (){
		console.log("clicked.");
	};
});

var app = {
	initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},

	onDeviceReady: function() {
		console.log('device ready');

	}
};

app.initialize();

$(document).ready(function(){
  $('ul[role="nav"] li').click(function(){
    $(this).siblings('li').removeClass('active');
    $(this).addClass('active');
  });
});
