/// <reference path="../jquery-2.1.1.js" />
/// <reference path="../jquery.validate.js" />
/// <reference path="../bootstrap.js" />
/// <reference path="../bootstrap-datepicker.js" />
/// <reference path="../jquery.validate-vsdoc.js" />
/// <reference path="../jquery-2.1.1.intellisense.js" />
/// <reference path="RealtimeValidate.js" />
/// <reference path="RegistrationStepsSlide.js" />


$(function () {
    //tooltip trigger
    $('.tooltip-show').tooltip();

    var registerForm = $("form.register-form");
    if (registerForm.length > 0) {
        validate("#UserName", "/Validator/Username", "UserName",true,false);
        validate("#Email", "/Validator/Email", "Email",false,false);
        EnterToNextTextBox(".register-form", false);
        DevelopersOrganismRegistrationFormSlide.slide(".register-form",true);
    }
});