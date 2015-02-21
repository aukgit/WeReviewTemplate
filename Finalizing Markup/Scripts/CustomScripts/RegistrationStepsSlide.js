/// <reference path="../jquery-2.1.1.js" />
/// <reference path="../jquery.validate.js" />
/// <reference path="../bootstrap.js" />
/// <reference path="../bootstrap-datepicker.js" />
/// <reference path="../jquery.validate-vsdoc.js" />
/// <reference path="../jquery-2.1.1.intellisense.js" />
/// <reference path="RegistrationStepsSlide.js" />
/// <reference path="CustomJS.js" />
/// <reference path="../jquery.tinysort.min.js" />

var DevelopersOrganismRegistrationFormSlide = {
    ///Slider will look for items with data-dev-slide="ordering number" data-dev-visited="false"
    slide: function (formSelector, keepOthersVisible) {
        var slideObjects = $(formSelector + " [data-dev-slide][data-dev-visited='false']");
        var executedOnce = false;
        var binders = "input[type='text']:visible," +
                      "input[type='password']:visible," +
                      "input[type='email']:visible," +
                      "input[type='numeric']:visible," +
                      "select:visible";
        var order = 0;
        if (slideObjects.length > 0) {
            //exist slides.
            slideObjects.hide();
            slideObjects.filter("[data-dev-slide='" + (order++) + "']").show();
            $(formSelector).submit(function (e) {
                e.preventDefault();
                var nextOne = slideObjects.filter("[data-dev-slide='" + order + "']");
                if (nextOne.length > 0) {
                    var previousOne = slideObjects.filter("[data-dev-slide='" + (order-1) + "']");
                    console.log(previousOne);
                    var inputBoxes = previousOne.find("input");
                    //still exist , prevent submission
                    if (inputBoxes.length > 0 &&  DevelopersOrganismRegistrationFormSlide.checkValids(inputBoxes)) {
                        if (!keepOthersVisible) {
                            previousOne.hide("slow");
                        }                        
                        console.log(inputBoxes);
                        console.log(binders);
                        if (!nextOne.prop("data-dev-visited")) {
                            nextOne.attr("data-dev-visited", "true");
                            nextOne.show("slow");
                            console.log(nextOne);
                            order++;
                        }
                    } else {
                        console.log("no inboxes");
                    }
                    
                } else {
                    //nothing left.
                    this.submit();
                }


            });

            //var notVisited = slideObjects.filter("[data-dev-visited='false']");
        }
    },
    checkValids: function (jBinders) {
        var length = jBinders.length;
        if (length > 0) {
            for (var i = 0; i < length; i++) {
                if (!$(jBinders[i]).valid()) {
                    return false;
                }
            }
        }
        return true;
    }
}