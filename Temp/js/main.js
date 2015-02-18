/*-----------------------------------------------------------------------------------*/
/* 		Mian Js Start ( The Lion - Multi-Purpose HTML5 Template )
/*-----------------------------------------------------------------------------------*/
$(document).ready(function($) {
"use strict"
/*-----------------------------------------------------------------------------------*/
/*    Parallax
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function(){
  jQuery.stellar({
    horizontalScrolling: false,
    scrollProperty: 'scroll',
    positionProperty: 'position',
  });
});





/*-----------------------------------------------------------------------------------*/
/*	Easy Pie Chart
/*-----------------------------------------------------------------------------------*/
var options = {
  scaleColor: false,
  trackColor: 'rgba(266,144,0,0.0)',
  barColor: '#ff7200',
  lineWidth: 2,
  lineCap: 'butt',
  size: 253
};
window.addEventListener('DOMContentLoaded', function() {
  var charts = [];
  [].forEach.call(document.querySelectorAll('.chart'),  function(el) {
    charts.push(new EasyPieChart(el, options));
  });
});
jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
},4000);	
});





/*-----------------------------------------------------------------------------------*/
/* 	FULL SCREEN
/*-----------------------------------------------------------------------------------*/
$('.full-screen').superslides({
});





/*-----------------------------------------------------------------------------------*/
/* 	ANIMATION
/*-----------------------------------------------------------------------------------*/
var wow = new WOW({
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       false        // trigger animations on mobile devices (true is default)
});
wow.init();



/*-----------------------------------------------------------------------------------*/
/*    PRODUCTS IMAGE SLIDES
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
$('#imageGallery').lightSlider({
    gallery:true,
	  auto:true,
    item:1,
    thumbItem:9,
    slideMargin:0,
	  loop:true,
    mode: "slide"
  });  
});




/*-----------------------------------------------------------------------------------*/
/*    PRODUCTS IMAGE SLIDES
/*-----------------------------------------------------------------------------------*/
$(document).ready(function() {
    $('#single-slide').lightSlider({
        adaptiveHeight:false,
        item:1,
        slideMargin:0,
        loop:true
    });
});
$().jetmenu();


/*-----------------------------------------------------------------------------------*/
/*    CONTACT FORM
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
      $('#contactForm .error').remove();
      var form = $('#contactForm'); // contact form
      var submit = $('#contactForm_submit'); // submit button
      var alertx = $('.successMsg'); // alertx div for show alert message
      // form submit event
      form.on('submit', function (e) {
      var hasError = false;
        $('.required').each(function () {
            if (jQuery.trim($(this).val()) === '') {
                $(this).parent().append('<span class="error"><i class="fa fa-exclamation-triangle"></i></span>');
                hasError = true;
            } else if ($(this).hasClass('email')) {
                var emailReg = /^([\w-\.]+@([\w]+\.)+[\w]{2,4})?$/;
                if (!emailReg.test(jQuery.trim($(this).val()))) {
                    $(this).parent().append('<span class="error"><i class="fa fa-exclamation-triangle"></i></span>');
                    hasError = true;
                }
            }
        });
        if (!hasError) {
            e.preventDefault(); // prevent default form submit
          // sending ajax request through jQuery
          $.ajax({
              url: 'js/inc/sendemail.php', // form action url
              type: 'POST', // form submit method get/post
              dataType: 'html', // request type html/json/xml
              data: form.serialize(), // serialize form data 
              beforeSend: function () {
                  alertx.fadeOut();
                  submit.html('Sending....'); // change submit button text
              },
              success: function (data) {
                  form.fadeOut(300);
                  alertx.html(data).fadeIn(1000); // fade in response data     
                  setTimeout(function() {
                    alertx.html(data).fadeOut(300);
                    $('#formName, #formEmail, #phone, #web, #message').val('')
                    form.fadeIn(1800);
                }, 4000);
              },
              error: function (e) {
                  console.log(e)
              }
          });
          $('.required').val('');
        }
        return false;    
      });
      
    $('#contactForm input').focus(function () {
        $('#contactForm .error').remove();
    });
    $('#contactForm textarea').focus(function () {
        $('#contactForm .error').remove();
    });
});
});





/*-----------------------------------------------------------------------------------*/
/*    STICKY NAVIGATION
/*-----------------------------------------------------------------------------------*/
$(document).ready(function(){
    $(".sticky").sticky({topSpacing:0});
});





/*-----------------------------------------------------------------------------------*/
/*  ISOTOPE PORTFOLIO
/*-----------------------------------------------------------------------------------*/
$(document).ready(function () {
    var $container = $('.portfolio-wrapper .items');
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows'
        });
  });
    $('.filter li a').click(function () {
        $('.filter li a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });
        return false;
    });
});

/*-----------------------------------------------------------------------------------*/
/*    SINGLE SLIDES
/*-----------------------------------------------------------------------------------*/
$("#owl-single").owlCarousel({
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 400,
    singleItem:true,
    items : 1, 
    itemsDesktop : false,
    itemsDesktopSmall : false,
    itemsTablet: false,
    itemsMobile : false,	  
	stopOnHover : true,
    navigation : true, // Show next and prev buttons
	pagination : false,
	navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
});






