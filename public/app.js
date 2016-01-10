angular.module('juliahentz', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('juliahentz').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'partial/home/home.html'
    });
    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: 'partial/projects/projects.html'
    });
    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'partial/about/about.html'
    });
    $stateProvider.state('contact', {
        url: '/contact',
        templateUrl: 'partial/contact/contact.html'
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
