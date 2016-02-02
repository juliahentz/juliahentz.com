/**
 * Created by juliahentz on 31/01/16.
 */
$(document).ready(function() {

    var $dividerWrapper = $('.divider-wrapper');
    var $pageContainer = $('.page-container');
    var $ribbonContainer = $('.ribbon-contrainer');

    var wrapperWidth = $dividerWrapper.width();
    var fullWidth = $(window).width();
    var fullHeight = $(window).height();

    var ribbonContainerHeight = $ribbonContainer.height();

    var originalHeight;
    var origialWidth;
    var initialScale;

    $dividerWrapper.css({
        left    : (fullWidth/2)-(wrapperWidth/2),
        top     : (fullHeight/2)-(wrapperWidth/1.6),
    });

    if(ribbonContainerHeight<=550){

        initialScale = ribbonContainerHeight/550;

        $dividerWrapper.css({
            scale: initialScale
        });

    };

    $(function(){

        originalHeight = fullHeight;
        origialWidth = fullWidth;

        $(window).on('resize', function(){
            fullWidth = $(window).width();
            fullHeight = $(window).height();
            var ribbonContainerHeight = $ribbonContainer.height();

            var scaleProportionHeight = ribbonContainerHeight/550;
            var scaleProportionWidth = fullWidth/origialWidth;

            if(scaleProportionHeight>=scaleProportionWidth){
                $dividerWrapper.css({
                    left    : (fullWidth/2)-(wrapperWidth/2),
                    top     : (fullHeight/2)-(wrapperWidth/1.6),
                    scale   : scaleProportionWidth
                });
            }else if(scaleProportionHeight<scaleProportionWidth){
                $dividerWrapper.css({
                    left    : (fullWidth/2)-(wrapperWidth/2),
                    top     : (fullHeight/2)-(wrapperWidth/1.6),
                    scale   : scaleProportionHeight
                });
            }

        });

    });

    $pageContainer.on("mousemove", function (e) {

        var mouseX = e.pageX;
        var mouseMoveProportion = wrapperWidth/fullWidth;

        var $myContainer = $(this);

        if(mouseX < 0) {
            mouseX = fullWidth;
        }else if (mouseX > fullWidth) {
            mouseX = fullWidth;
        }

        $myContainer.find('.designer-image-wrapper').css({
            transform       : 'translateX(' + (-1*(mouseX*mouseMoveProportion)) + 'px)',
            transition      : 'ease-out',
            rotate          : '23deg',
            top             :-(mouseX/fullWidth)*202,
            'border-right'  : '5px solid #fff'
        });
        $myContainer.find('.design-image').css({
            transform   : 'translateX(' + ((mouseX*mouseMoveProportion)) + 'px)',
            transition  : 'ease-out',
            rotate      : '-23deg'
        });

    });

});
