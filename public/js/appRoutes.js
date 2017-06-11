angular.module('appRoutes', []).config(["$routeProvider", '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

    //homepage
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })

    //nerds page uses view and controller
    .when('/nerds', {
      templateUrl: 'views/nerd.html',
      controller: 'NerdController'
    })

  //what does this do?
  $locationProvider.html5Mode(true)

}])
