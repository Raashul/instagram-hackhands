angular.module('Instagram', ['ngRoute', 'satellizer'])
  .config(function($routeProvider, $authProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'SignupCtrl'
      })
      .when('/:photo_id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .otherwise('/');

    $authProvider.oauth2({
      name: 'instagram',
      url: 'http://localhost:3000/auth/instagram',
      redirectUri: 'http://localhost:8000',
      clientId: '799d1f8ea0e44ac8b70e7f18fcacedd1',
      authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
    });
  });