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
                $singleItemhtml += $singleItemhtml;
            }
            $(".owl-list").append($singleItemhtml);

        },
        suggestedAppsList: function (numberOfItems) {
            var $singleItemhtml = $(".app-suggested-list-items").html();
            for (var i = 0; i < numberOfItems; i++) {
                $singleItemhtml += $singleItemhtml;
            }
            $(".app-suggested-list-items").append($singleItemhtml);

        },
        addOwlItems: function (itemsContainerjQuerySelector, numberOfItems) {
            var $container = $(itemsContainerjQuerySelector);
            if ($container.length > 0) {
                var $singleItemhtml = $container.html();
                var combinner = new Array(numberOfItems + 5);
                for (var i = 0; i < numberOfItems; i++) {
                    combinner[i] = $singleItemhtml;
                }
                var totalCombinedStringHtml = combinner.join("");

                $container.append(totalCombinedStringHtml);
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

    sampleItemsCreate.addOwlItems(".owl-list", 20);

    sampleItemsCreate.addOwlItems(".app-suggested-list-items", 3);
    //archive-app-collection-list

    sampleItemsCreate.addOwlItems(".archive-app-collection-list", 3);
    sampleItemsCreate.addOwlItems(".category-page-listing-generation-only", 6);
    sampleItemsCreate.addOwlItems(".search-page-apps-list", 5);
    sampleItemsCreate.addOwlItems(".category-listing-displays-with-apps-container:first", 5);

    //sampleItemsCreate.addOwlItems(".search-page .archive-app-collection-list", 5);


    //sampleItemsCreate.addOwlItems(".app-suggested-list-items-mobile", 5);
    //sampleItemsCreate.gallerySlides(5);
    //sampleItemsCreate.suggestedAppsList(5);


});
