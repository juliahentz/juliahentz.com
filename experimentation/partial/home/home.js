angular.module('juliahentz').controller('HomeCtrl',function($scope){

    // Initialization
    $scope.onMouseLeaveResult = "";
    $scope.onMouseMoveResult = "";

    // Utility functions

    // Accepts a MouseEvent as input and returns the x and y
    // coordinates relative to the target element.
    var getCrossBrowserElementCoords = function (mouseEvent)
    {
        var result = {
            x: 0,
        };

        if (!mouseEvent){
            mouseEvent = window.event;
        }

        if (mouseEvent.pageX){
            result.x = mouseEvent.pageX;
        } else if (mouseEvent.clientX) {
            result.x = mouseEvent.clientX + document.body.scrollLeft +
                document.documentElement.scrollLeft;
        }

        if (mouseEvent.target) {
            var offEl = mouseEvent.target;
            var offX = 0;

            if (typeof(offEl.offsetParent) !== "undefined") {
                while (offEl)
                {
                    offX += offEl.offsetLeft;

                    offEl = offEl.offsetParent;
                }
            } else {
                offX = offEl.x;
            }

            result.x -= offX;
        }

        console.log(result);

        return result;
    };


    var getMouseEventResult = function (mouseEvent)
    {
        var coords = getCrossBrowserElementCoords(mouseEvent);
        return coords.x;

    };

    // Event handlers

    $scope.onMouseMove = function ($event) {
        getMouseEventResult($event);

        var mouseX = getMouseEventResult($event);


        angular.element(document.querySelector('.dividerbar')).css({
            left: mouseX,
            transition: 'none'
        });
        angular.element(document.querySelector('.designwrapper')).css({
            transform: 'translateX(' + (mouseX) + 'px)',
            transition: 'none'
        });
        angular.element(document.querySelector('.designimage')).css({
            transform: 'translateX(' + (-1*mouseX) + 'px)',
            transition: 'none'
        });
    };

});

