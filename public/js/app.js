$(document).ready(function() {

    var $navBtn = $('.navigation-buttons');

    var $navIcons = $('.nav-iconset');
    var $navIcon = $('.icons');
    var $navLabels = $('.nav-labelset');
    var $navLabel = $('.menu-label');

    var mouseOverBoolean = false;

    var timer;
    var timer2;

    var $sideMenu = $('.side-menu');
    var buttonClicked = false;
    var $navBurgerIcon = $('.navigation-burger-icon');

    $navBtn.mouseenter(function(){

        mouseOverBoolean = true;

        clearTimeout(timer2);

        var menuLabelArray = $(this).find($navLabels).toArray();
        var $menuNavIcons = $(this).find($navIcons);
        var menuLabelWidth = [63, 69, 114, 65, 76];

        timer = setTimeout(function(){

            for(var i= 0; i<menuLabelArray.length; i++){

                $(menuLabelArray[i]).css({display:'inherit'});
                $(menuLabelArray[i]).transition({
                    width:menuLabelWidth[i],
                    opacity:1
                }, 1500, 'ease');

            };

            $menuNavIcons.css({display:'none'});
            $menuNavIcons.css({
                opacity:0
            });

        }, 3000);

    });

    $navBtn.mouseleave(function(){

        var $menuLabel = $(this).find($navLabels);
        var $menuNavIcons = $(this).find($navIcons);

        mouseOverBoolean = false;

        clearTimeout(timer);

        timer2 = setTimeout(function(){

            $menuLabel.css({display:'none', width:'31px'});

            $menuNavIcons.css({display:'inherit'});
            $menuNavIcons.transition({
                opacity:1
            }, 1000, 'ease');

        }, 1000);

    });

    $navIcon.mouseover(function(){

        $(this).transition({
            scale:1.1
        },100, 'ease');

    });
    $navLabel.mouseover(function(){

        $(this).transition({
            scale:1.1
        },100, 'ease');

    });
    $navIcon.mouseleave(function(){

        $(this).transition({
            scale:1
        },100, 'ease');

    });

    $navLabel.mouseleave(function(){

        $(this).transition({
            scale:1
        },100, 'ease');

    });

    $('.navigation-burger-icon').click(function(){
        buttonClicked = !buttonClicked;

        if(buttonClicked){
            $sideMenu.removeClass('side-menu-hide');
            $sideMenu.transition({ x: '-150' });
            $navBurgerIcon.transition({ x: '-150'})
        }else{
            $sideMenu.transition({ x: '0' });
            $navBurgerIcon.transition({ x: '0'})
            setTimeout(function(){
                $sideMenu.addClass('side-menu-hide');
            }, 500);
        }

    });

});
