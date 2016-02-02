angular.module('cms').controller('DesignProjectsCtrl',function($scope, $modal){


    $scope.createProject = function(project){

        var modalInstance = $modal.open({
            animation: true,
            templateUrl: 'partial/modal-projects/modal-projects.html',
            controller: 'ModalProjectsCtrl',
            size: 'lg',
            resolve: {
                project: function () {
                    return project;
                }
            }
        });

    };
});
