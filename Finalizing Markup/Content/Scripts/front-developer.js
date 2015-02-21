/// <reference path="jquery-1.10.2.js" />
/// <reference path="jetmenu.js" />
/// <reference path="modernizr-2.6.2.js" />
/// <reference path="owl.carousel.min.js" />
/// <reference path="the-lion-plugin.js" />
/// <reference path="jquery.validate.js" />
/// <reference path="respond.js" />
/// <reference path="pei-chart.js" />
/// <reference path="jquery.lightSlider.min.js" />
/// <reference path="../../rs-plugin/js/jquery.themepunch.revolution.min.js" />

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
        startheight: 450,
        hideThumbs: 10,
        fullWidth: "off",
        forceFullWidth: "off"
    });

    $("#owl-example").owlCarousel();
});
