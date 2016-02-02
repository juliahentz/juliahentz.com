angular.module('cms', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('cms').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('design-projects', {
        url: '/design-projects',
        templateUrl: 'partial/design-projects/design-projects.html',
        controller: 'DesignProjectsCtrl'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/design-projects');

});

angular.module('cms').run(function($rootScope) {

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
