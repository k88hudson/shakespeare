var app = angular.module('shakespeare', ['ngRoute', 'ngAnimate']);

app.config( function($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider
    .when('/', {
      templateUrl : 'pages/home.html',
      controller  : 'mainController'
    })
    .when('/register', {
      templateUrl : 'pages/register.html',
      controller  : 'registerController'
    })
    .when('/contact', {
      templateUrl : 'pages/contact.html',
      controller  : 'contactController'
    });
});

app.controller('mainController', function($scope) {
  $scope.message = 'Shakespeare';
});

app.controller('registerController', function($scope) {
  $scope.message = 'New Account';
  $scope.submit = function() {
    console.log(this.user);
  };
});

app.controller('contactController', function($scope) {
  $scope.message = 'Contact';
});

app.controller('personaController', function($scope, $http) {

  navigator.id.watch({
    onlogin: function(assertion) {
      console.log(assertion);
    },
    onlogout: function() {
      console.log('logout');
    }
  });

  $scope.login = function() {
    navigator.id.request();
  };

  $scope.logout = function() {
    navigator.id.logout();
  };
});
