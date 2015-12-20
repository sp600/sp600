// script.js

    // create the module and name it scotchApp
    var scotchApp = angular.module('scotchApp', ['ngRoute', 'pascalprecht.translate']);

    // configure our routes
    scotchApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            // route for the team page
            .when('/team', {
                templateUrl : 'pages/team.html',
                controller  : 'aboutController'
            })

            // route for the services page
            .when('/services', {
                templateUrl : 'pages/services.html',
                controller  : 'servicesController'
            })

            // route for the contact page
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            });
    });

    scotchApp.config(['$translateProvider', function($translateProvider) {
        $translateProvider.translations('en', {
            'TITLE': 'Hello',
            'FOO': 'This is a paragraph'
          });

          $translateProvider.translations('de', {
            'TITLE': 'Hallo',
            'FOO': 'Dies ist ein Absatz'
          });

          $translateProvider.preferredLanguage('en');
    }])

    // create the controller and inject Angular's $scope
    scotchApp.controller('mainController', ['$translate', '$scope', function($translate, $scope) {
        $scope.message = 'Everyone come and see how good I look!';
        $scope.langKey = 'en'
        $scope.toggle = function() {
        	console.log('Hello world!!')
            if($scope.langKey === 'en') {
                $scope.langKey = 'de'
            } else {
                $scope.langKey = 'en'
            }
            $translate.use($scope.langKey)
            console.log($scope)
        };
        $scope.changeLanguage = function(langKey) {
            console.log('Button clicked')
            $translate.use(langKey);
        };
    }]);

    angular.module('scotchApp').controller('Ctrl', ['$translate', '$scope',
        function($translate, $scope) {
            $scope.changeLanguage = function(langKey) {
                console.log('Clicked button: '+langKey)
                $translate.use(langKey);
            };
        }]);

    scotchApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

    scotchApp.controller('teamController', function($scope) {
        $scope.message = 'Look! I am the team page.';
    });

    scotchApp.controller('servicesController', function($scope) {
        $scope.message = 'Services! JK. This is just a demo.';
    });

    scotchApp.controller('contactController', function($scope) {
        $scope.message = 'Contact us! JK. This is just a demo.';
    });