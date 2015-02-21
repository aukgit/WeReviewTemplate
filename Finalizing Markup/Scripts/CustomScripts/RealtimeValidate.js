/// <reference path="../jquery-2.1.1.js" />
/// <reference path="../jquery.validate.js" />
/// <reference path="../bootstrap.js" />
/// <reference path="../bootstrap-datepicker.js" />
/// <reference path="../jquery.validate-vsdoc.js" />
/// <reference path="../jquery-2.1.1.intellisense.js" />


//validate("#LogName", "/Validation/username", "username");
//validating email
//validate("#Email", "/Validation/email", "email");
//validatorNameTemp should be a span beside textbox with another class CustomValidation
//validatorNameTemp=> <span class='CustomValidation validatorNameTemp'></span>
//include partial view ("_ValidatorCommonForm", new ViewData...{token}) in the form
//textBox : with iD jquery selector
//ValidationLink:MVC Link
//validatorNameTemp:same as textBox without id
//focusIfNotValid:true or null, disabled :true/false
function validate(textBox, ValidationLink, validatorNameTemp, focusIfNotValid, disabled) {

    if ($(textBox).length > 0) {
        $(textBox).removeAttr("disabled");
        $(textBox).keyup(function () {
            var user = $(textBox).val();
            $("#validation #id").val(user);
            //console.log(user);
        });
        $(textBox).focus(function () {
            var user = $(textBox).val();
            $("#validation #id").val(user);
            //console.log(user);
        });
        $(textBox).blur(function () {
            var user = $(textBox).val();
            //Validation should be a form underlying the original from with 
            // only antiforgery token and a hidden id field
            //whatever is typed in that selected text box will be pushed into
            //this form
            var form = $("#validation").serialize();
            var validatorName = "span.CustomValidation." + validatorNameTemp;
            var token = $('input[name=__RequestVerificationToken]').val();
            var processingState1 = "glyphicon-refresh";
            var processingState2 = "glyphicon-refresh-animate";
            var isHideClass = "hide";
            var colorGreen = "green";
            var colorRed = "red";
            var correctState = "glyphicon-ok";
            var incorrectState = "glyphicon-remove";
            var displayName = $(validatorName).attr('data-display');
            var correctStateTitle = displayName + " is available and valid.";
            var incorrectStateTitle = displayName + " is not valid or already exist. Your input can't contain ( [ ] ' , * & ? \" ) or space or any other special character for this data-type.";
            var tooltipName = "a.CustomValidation." + validatorNameTemp + ".tooltip-show";
            $("#validation #id").val(user);
            //console.log($("#validation #id").val());
            $(validatorName).removeClass(incorrectState).removeClass(correctState);


            //if no processing state then add it
            if (!$(validatorName).hasClass(processingState1)) {
                $(validatorName).addClass(processingState1);
            }

            if (!$(validatorName).hasClass(processingState2)) {
                $(validatorName).addClass(processingState2);
            }
            if ($(validatorName).hasClass(isHideClass)) {
                $(validatorName).removeClass(isHideClass);
            }
            $(tooltipName).attr("data-original-title", "Validating " + displayName);
            $(tooltipName).attr("title", "Validating " + displayName);
            // confirming processing state.


            $.ajax({
                type: "POST",
                dataType: "JSON",
                url: ValidationLink,
                data: form,
                success: function (response) {
                    //Remove the processing state
                    if ($(validatorName).hasClass(processingState1)) {
                        $(validatorName).removeClass(processingState1);
                    }

                    if ($(validatorName).hasClass(processingState2)) {
                        $(validatorName).removeClass(processingState2);
                    }
                    if ($(validatorName).hasClass(isHideClass)) {
                        $(validatorName).removeClass(isHideClass);
                    }
                    //Remove the processing state
                    if (response == true) {
                        if ($(validatorName).hasClass(incorrectState)) {
                            $(validatorName).removeClass(incorrectState);
                        }
                        if ($(validatorName).hasClass(colorRed)) {
                            $(validatorName).removeClass(colorRed);
                        }
                        $(validatorName).addClass(colorGreen);
                        $(validatorName).addClass(correctState).attr('title', correctStateTitle);
                        $(tooltipName).attr("title", correctStateTitle);
                        $(tooltipName).attr("data-original-title", correctStateTitle);
                        if (disabled) { 
                            $(textBox).prop("disabled", true);
                        }
                        $(textBox).addClass("bold").addClass("green");
                        $(textBox).next().focus();


                    } else {
                        if ($(validatorName).hasClass(colorGreen)) {
                            $(validatorName).removeClass(colorGreen);
                        }
                        if ($(validatorName).hasClass(correctState)) {
                            $(validatorName).removeClass(correctState);
                        }
                        $(textBox).prop("disabled", false);
                        $(validatorName).addClass(colorRed);
                        $(textBox).addClass("bold").addClass("red");
                        $(validatorName).addClass(incorrectState).attr('title', incorrectStateTitle);
                        $(tooltipName).attr("title", incorrectStateTitle);
                        $(tooltipName).attr("data-original-title", incorrectStateTitle);
                        if (focusIfNotValid === true) {
                            $(textBox).focus();
                        }
                    }
                    $(".tooltip-show").tooltip();

                },
                error: function (xhr, status, error) {
                    //Remove the processing state
                    if ($(validatorName).hasClass(processingState1)) {
                        $(validatorName).removeClass(processingState1);
                    }

                    if ($(validatorName).hasClass(processingState2)) {
                        $(validatorName).removeClass(processingState2);
                    }
                    if ($(validatorName).hasClass(isHideClass)) {
                        $(validatorName).removeClass(isHideClass);
                    }
                    //Remove the processing state
                    if ($(validatorName).hasClass(correctState)) {
                        $(validatorName).removeClass(correctState);
                    }

                    if ($(validatorName).hasClass(colorGreen)) {
                        $(validatorName).removeClass(colorGreen);
                    }
                    $(textBox).prop("disabled", false);
                    $(validatorName).addClass(colorRed);
                    $(validatorName).addClass(incorrectState).attr('title', error);
                    $(tooltipName).attr("title", status);
                    $(tooltipName).attr("data-original-title", error);
                    $(textBox).addClass("bold").addClass("red");
                    $(".tooltip-show").tooltip();

                }
            });
        });
    }
}


