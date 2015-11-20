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
		.when('/tasks', {
			templateUrl: 'views/task-daily.html',
			controller: "TasksCtrl"
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

app.controller('TasksCtrl', function ($scope, $http) {
	$http.get('https://prompto.smileupps.com/tasks/_design/tasks/_view/all')
    .success(function (response){
	    $scope.tasks = response.rows;
    });

	$scope.taskClick = function (){
		console.log("clciked.");
	};
});

app.controller('DashboardCtrl', function ($scope, $resource) {
	var Tasks = $resource('https://prompto.smileupps.com/tasks');
	//$scope.tasks = Tasks.get();

	$scope.tasks = [
		{'name':'Take Medication','category':'Medication', time: '08:00', completed: true },
		{'name':'Brush Teeth','category':'Hygene', time: '08:15', completed: true},
		{'name':'Take Medication','category':'Medication', time: '15:00'},
		{'name':'Eat Dinner','category':'Food', time: '19:00'},
		{'name':'Take Medication','category':'Medication', time: '21:00'},
		{'name':'Charge iPad','category':'Devices', time: '22:00'}
	];

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
