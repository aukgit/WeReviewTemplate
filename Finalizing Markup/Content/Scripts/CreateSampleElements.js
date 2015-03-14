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

    var sampleItemsCreate = {

        appList: function (numberOfItems) {
            var $singleItemhtml = $(".owl-list").html();
            for (var i = 0; i < numberOfItems; i++) {
                $(".owl-list").append($singleItemhtml);
            }
        },
        suggestedAppsList: function (numberOfItems) {
            var $singleItemhtml = $(".app-suggested-list-items").html();
            for (var i = 0; i < numberOfItems; i++) {
                $(".app-suggested-list-items").append($singleItemhtml);
            }
        },
        addOwlItems: function (itemsContainerjQuerySelector,numberOfItems) {
            var $singleItemhtml = $(itemsContainerjQuerySelector).html();
            for (var i = 0; i < numberOfItems; i++) {
                $(itemsContainerjQuerySelector).append($singleItemhtml);
            }
        },
        gallerySlides: function (numberOfItems) {
            var listOfAnimations = ["zoomout", "fade"];
            var $singleItemhtml = $(".tp-banner ul").html();
            for (var i = 0; i < numberOfItems; i++) {
                $(".tp-banner ul").append($singleItemhtml);
            }
        }
    }

    sampleItemsCreate.appList(20);
    sampleItemsCreate.addOwlItems(".app-suggested-list-items", 5);
    //sampleItemsCreate.addOwlItems(".app-suggested-list-items-mobile", 5);
    sampleItemsCreate.gallerySlides(5);
    //sampleItemsCreate.suggestedAppsList(5);


});
