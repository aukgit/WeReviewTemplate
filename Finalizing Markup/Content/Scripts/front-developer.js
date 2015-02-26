/// <reference path="jquery-2.1.1.js" />

/// <reference path="jetmenu.js" />
/// <reference path="modernizr-2.6.2.js" />
/// <reference path="owl.carousel.min.js" />
/// <reference path="the-lion-plugin.js" />
/// <reference path="jquery.validate.js" />
/// <reference path="respond.js" />
/// <reference path="pei-chart.js" />
/// <reference path="jquery.lightSlider.min.js" />
/// <reference path="../../rs-plugin/js/jquery.themepunch.revolution.min.js" />
/// <reference path="bootstrap-rating.min.js" />

$(function () {



    //$('.tp-banner').show().revolution({
    //    dottedOverlay: "none",
    //    delay: 8000,
    //    startwidth: 960,
    //    startheight: 500,
    //    hideThumbs: 150,
    //    thumbWidth: 50,
    //    thumbHeight: 50,
    //    thumbAmount: 20,
    //    navigationType: "bullet",
    //    navigationArrows: "solo",
    //    navigationStyle: "preview4",
    //    touchenabled: "on",
    //    onHoverStop: "on",
    //    fullWidth: "off",
    //    fullScreen: "off",
    //    spinner: "spinner4",
    //    stopLoop: "off"
    //});

    $('.tp-banner').show().revolution({
        delay: 5000,
        startwidth: 960,
        startheight: 370,
        hideThumbs: 10,
        fullWidth: "off",
        forceFullWidth: "off"
    });
    
    
    $(".owl-list").owlCarousel({
        navigation: true,
        navigationText: [
          "<i class='fa fa-chevron-circle-left'></i>",
          "<i class='fa fa-chevron-circle-right'></i>"
        ],
        items: 6, //10 items above 1000px browser width
        itemsDesktop: [1000, 5], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 3], // betweem 900px and 601px
        itemsTablet: [600, 2] //2 items between 600 and 0

    });

    $(".rating-5-front").rating({
        showClear: false,
        showCaption: false
    });
});
