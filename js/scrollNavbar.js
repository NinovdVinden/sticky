var scrollValue;
var positionLast = 0;
var navi = $('nav');
var navHeight = navi.outerHeight();

function schuifNav() {
    scrollValue = $(this).scrollTop();
    if (scrollValue > positionLast) {
        //naar beneden
        console.log('naar beneden')
        positionLast = scrollValue;
        navi.css('top', -navHeight + 'px')
    } else {
        //naar boven
        console.log('menu naar voren')
        positionLast = scrollValue;
        navi.css('top', 0)

    }
    console.log(scrollValue);
}

$(window).on('scroll', schuifNav);