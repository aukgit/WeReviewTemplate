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

    $(".seo-hide").hide();


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
        dottedOverlay: "none",
        delay: 5000,
        startwidth: 960,
        startheight: 320,
        hideThumbs: 10,
        fullWidth: "off",
        navigationType: "bullet",
        navigationStyle: "preview2",
        forceFullWidth: "off"
    });


    $(".owl-list").owlCarousel({
        navigation: true,
        navigationText: [
          "<i class='fa fa-chevron-circle-left'></i>",
          "<i class='fa fa-chevron-circle-right'></i>"
        ],
        items: 8, //10 items above 1000px browser width
        itemsDesktop: [1152, 6], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 5], // betweem 900px and 601px
        itemsTabletSmall: [730, 4],
        itemsTablet: [600, 3], //2 items between 600 and 0
        //itemsCustom: [[0, 2], [435, 3], [450, 2], [600, 3], [730, 4], [900, 5],  [950, 6]], // [[740, 6], [1000, 8], [1200, 10], [1600, 16]]
        itemsMobile: [450, 2],
        //itemsScaleUp: false

    });

    //$(".app-suggested-list").owlCarousel({
    //    navigation: true,
    //    navigationText: [
    //      "<i class='fa fa-chevron-circle-left'></i>",
    //      "<i class='fa fa-chevron-circle-right'></i>"
    //    ],
    //    items:1

    //});

    $(".rating-5-front").rating({
        showClear: false,
        showCaption: false
    });

    $(".rating-5-page-details").rating({
        showClear: false,
        showCaption: true,
        starCaptions: {
            0.5: "0.5",
            1: "1",
            1.5: "1.5",
            2: "2",
            2.5: "2.5",
            3: "3",
            3.5: "3.5",
            4: "4",
            4.5: "4.5",
            5: "5"
        }
    });

    $("#apps-preview").owlCarousel({
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        items: 1,
        itemsDesktop: false,
        itemsDesktopSmall: false,
        itemsTablet: false,
        itemsMobile: false,
        stopOnHover: true,
        navigation: true, // Show next and prev buttons
        pagination: false,
        autoHeight: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    
    $("div.app-suggested-list-items-mobile:first,div.featured-apps-list-items:first").owlCarousel({
        navigation: true,
        navigationText: [
          "<i class='fa fa-chevron-circle-left'></i>",
          "<i class='fa fa-chevron-circle-right'></i>"
        ],
        items: 1, //10 items above 1000px browser width
        //itemsDesktop: [1152, 6], //5 items between 1000px and 901px
        //itemsDesktopSmall: [900, 4], // betweem 900px and 601px
        //itemsTablet: [600, 3], //2 items between 600 and 0
        //itemsMobile: [450, 2],
        itemsCustom:[370,1]
    });

    var selectForYoutubeVideoOnDetailsPage = "body.app-details-page:first .youtube-video:first";
    var $youtubeVideoContainer = $(selectForYoutubeVideoOnDetailsPage);
    if ($youtubeVideoContainer.length === 1) {
        $youtubeVideoContainer.find(".playable-btn:first").click(function () {
            var $iframe = $youtubeVideoContainer.find("iframe:first");
            var $this = $(this);
            if ($iframe.length === 1) {
                $iframe[0].src += "?rel=0&controls=1&autoplay=1";
                $this.hide("slow");
                $this.unbind("click");//or some other way to make sure that this only happens once
            }

        });
    }




    function showHide(shID) {
        if (document.getElementById(shID)) {
            if (document.getElementById(shID + '-show').style.display != 'none') {
                // already hidden
                document.getElementById(shID + '-show').style.display = 'none';
                document.getElementById(shID).style.display = 'inline';
                $("span#elipse-dot").hide();
            } else {
                document.getElementById(shID + '-show').style.display = 'inline';
                document.getElementById(shID).style.display = 'none';
                $("span#elipse-dot").show();
            }
        }
    }
    function showHideForReview(i) {

        if (document.getElementById('show_review' + i).style.display != 'none') {
            document.getElementById('show_review' + i).style.display = 'none';
            document.getElementById('less_review' + i).style.display = 'inline';
        }
        else {
            document.getElementById('show_review' + i).style.display = 'inline';
            document.getElementById('less_review' + i).style.display = 'none';
        }
    }

    function showAppsInfoMore(i) {

        if (document.getElementById('show_hide_id_more' + i).style.display != 'none') {
            document.getElementById('show_hide_id_more' + i).style.display = 'none';
            document.getElementById('show_hide_id_less' + i).style.display = 'inline';
        }
        else {
            document.getElementById('show_hide_id_more' + i).style.display = 'inline';
            document.getElementById('show_hide_id_less' + i).style.display = 'none';
        }
    }

    $("#app-description-see-more-btn,#app-description-see-less-btn").click(function () {
        showHide("example");
    }).css({
        'cursor': 'pointer'
    });;

    function doProcessMoreNLessBtns(e) {
        e.preventDefault();
        var $this = $(this);
        var id = $this.attr("data-sequence");
        //showHideForReview(id);
    }

    var $appDescription = $("body.app-details-page:first .app-description:first");

    var $showBtns = $appDescription.find("a.hideLink");
    var $hideBtns = $appDescription.find("a.showLink");
    $showBtns.click(doProcessMoreNLessBtns).css({
        'cursor': 'pointer'
    });
    $hideBtns.click(doProcessMoreNLessBtns).css({
        'cursor': 'pointer'

    }).trigger("click");

});
