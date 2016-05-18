(function () {
  'use strict';

  angular
    .module('app')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/homePage.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/1', {
        templateUrl: 'app/main/homePage.html',
        controller: 'MainController',
        controllerAs: 'main'

      })
      .when('/2', {
        templateUrl: 'app/main/homePage.html',
        controller: 'MainController',
        controllerAs: 'main'

      })
      .when('/3', {
        templateUrl: 'app/Content/Blog2.html',


      })
      .when('/4', {
        templateUrl: 'app/product/productList.html',


      })
      .when('/5', {
        templateUrl: 'app/shoppingcart/shoppingCart.html',


      })
      .when('/6', {
        templateUrl: '',


      })
      .when('/7', {
        templateUrl: 'app/Content/ContactUs.html',


      })
      .when('/8', {
        templateUrl: 'app/security/login.html',


      })
      .when('/9', {
        templateUrl: 'app/security/signUp.html',


      })

      .when('/71', {
        templateUrl: 'app/Content/aboutUs.html',


      })


      .otherwise({
        redirectTo: ''
      });
  }

})();
