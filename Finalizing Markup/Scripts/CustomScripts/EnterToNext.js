//jquery formSelector, submitAtLast:true/false
function EnterToNextTextBox(formSelector, submitAtLast) {
    $(formSelector + ' input:text:first').focus();
    var binders = formSelector + " input[type='text']:visible," +
                  formSelector + " input[type='password']:visible," +
                  formSelector + " input[type='numeric']:visible," +
                  formSelector + " input[type='email']:visible," +
                  formSelector + " select:visible";
    $(document).on('keypress', binders, function (e) {
        //var codeAbove = d.keyCode || d.which;
        //console.log("above code :" + codeAbove);
        var code = e.keyCode || e.which;
        console.log("inside code :" + code);
        if (code == 13) { //Enter key
            e.preventDefault(); //Skip default behavior of the enter key
            var n = $(binders).length;
            var nextIndex = $(binders).index(this) + 1;
            if (nextIndex < n) {
                $(binders)[nextIndex].focus();
            } else {
                $(binders)[nextIndex - 1].blur();
                if (submitAtLast === true){
                    $(formSelector).submit();
                }
            }
        }

    });

}

//dynamic event loading
//$('body').on('click', 'a.myclass', function() {
// do something
//});