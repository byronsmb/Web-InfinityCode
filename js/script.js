
var $ = jQuery.noConflict();


// Page Loader
$(window).load(function () {
    
    "use strict";
	$('#loader').fadeOut();
});



    // jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    
    "use strict";
    
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 68
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});



// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top',
	offset: 70
	
});



// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    "use strict";
    if (!$(this).hasClass('no_close')) {
        $('.navbar-toggle:visible').click();
    }
});
    
    
    
    
    /*----------------------------------------------------*/
    /*	Css3 Transition
    /*----------------------------------------------------*/

        $('*').each(function(){
            if($(this).attr('data-animation')) {
                var $animationName = $(this).attr('data-animation'),
                    $animationDelay = "delay-"+$(this).attr('data-animation-delay');
                $(this).appear (function() {
                    $(this).addClass('animated').addClass($animationName);
                    $(this).addClass('animated').addClass($animationDelay);
                });
            }
        });
    
    

    
    /*--------------------------------------------------*/
    /* Counter*/
    /*--------------------------------------------------*/ 
        

                $('.timer').countTo();

                $('.counter-item').appear(function() {
                    $('.timer').countTo();
                },{accY: -100});
            
        



////------- Testimonials Carousel
	
var testimonial = $("#testimonial-carousel");

testimonial.owlCarousel({
	navigation : true,
	pagination: true,
	slideSpeed : 2500,
	stopOnHover: true,
	autoPlay: 3000,
	singleItem: true,
	transitionStyle : "fade",
	navigationText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>']
});

	

////------- Pricing Table

$(document).ready(function() {
 
  $(".pricing").owlCarousel({
        pagination: true,
        navigation : false,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
    	singleItem:false,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
        items: 4,
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});


////------- Latest News

$(document).ready(function() {
 
  $(".latest-news").owlCarousel({
        pagination: true,
        navigation : false,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 4000,
    	singleItem:false,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
        items: 3,
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});




// Team Carousel

$(document).ready(function() {
 
  $(".our-team").owlCarousel({
        pagination: true,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
        items: 4,
    	//singleItem:true,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});



////------- Partner/CLients

$(document).ready(function() {
 
  $(".clients").owlCarousel({
        pagination: false,
        navigation : true,
        slideSpeed : 2500,
		stopOnHover: true,
    	autoPlay: 3000,
    	singleItem:false,
        itemsMobile : [550,1],
        itemsDesktopSmall : [991,2],
        items: 5,
		transitionStyle : "fade",
		navigationText: ['<i class="fa fa-chevron-left"></i>','<i class="fa fa-chevron-right"></i>']
  });
 
});




$ ( function () {

	$(".video").fitVids();
	
});





        // Tab------------------------------


$('#team a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})




/*---------------------------------------------------*/
    /* Progress Bar
    /*---------------------------------------------------*/
    $(document).ready(function($) {
	"use strict";
    
        $('.skill-shortcode').appear(function() {
            $('.progress').each(function(){ 
                $('.progress-bar').css('width',  function(){ return ($(this).attr('data-percentage')+'%')});
            });
        },{accY: -100});
        
        
    });
	
/*---------------------------------------------------*/
    /* Transicion APPs UIs
    /*---------------------------------------------------*/
    // Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Define un índice inicial
    let index = 0;
    // Obtén todas las imágenes del slideshow
    const images = document.querySelectorAll("#slideshow img");
    // Muestra la primera imagen
    images[index].classList.add("active");
    // Función para mostrar la siguiente imagen en el slideshow
    function showNextImage() {
        // Oculta la imagen actual
        images[index].classList.remove("active");
        // Calcula el índice de la siguiente imagen
        index = (index + 1) % images.length;
        // Muestra la siguiente imagen
        images[index].classList.add("active");
    }
    // Establece un intervalo para cambiar automáticamente las imágenes
    setInterval(showNextImage, 3000); // Cambia la imagen cada 3 segundos (3000 milisegundos)
});
