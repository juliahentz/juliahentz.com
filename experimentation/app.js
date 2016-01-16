angular.module('juliahentz', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('juliahentz').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'partial/home/home.html',
        controller: 'HomeCtrl'
    });
    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: 'partial/projects/projects.html',
        controller: 'ProjectsCtrl'
    });
    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'partial/about/about.html',
        controller: 'AboutCtrl'
    });
    $stateProvider.state('contact', {
        url: '/contact',
        templateUrl: 'partial/contact/contact.html',
        controller: 'ContactCtrl'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('juliahentz').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
