$(document).ready(function() {


	// Scroll Events
	$(window).scroll(function(){

		var wScroll = $(this).scrollTop();

		// Activate menu
		if (wScroll > 20) {
			$('#main-nav').addClass('active');
			$('#slide_out_menu').addClass('scrolled');
		}
		else {
			$('#main-nav').removeClass('active');
			$('#slide_out_menu').removeClass('scrolled');
		};


		//Scroll Effects

	});


	// Navigation
	$('#navigation').on('click', function(e){
		e.preventDefault();
		$(this).addClass('open');
		$('#slide_out_menu').toggleClass('open');

		if ($('#slide_out_menu').hasClass('open')) {
			$('.menu-close').on('click', function(e){
				e.preventDefault();
				$('#slide_out_menu').removeClass('open');
			})
		}
	});


	// Price Table
	var individual_price_table = $('#price_tables').find('.individual');
	var company_price_table = $('#price_tables').find('.company');


	$('.switch-toggles').find('.individual').addClass('active');
	$('#price_tables').find('.individual').addClass('active');

	$('.switch-toggles').find('.individual').on('click', function(){
		$(this).addClass('active');
		$(this).closest('.switch-toggles').removeClass('active');
		$(this).siblings().removeClass('active');
		individual_price_table.addClass('active');
		company_price_table.removeClass('active');
	});

	$('.switch-toggles').find('.company').on('click', function(){
		$(this).addClass('active');
		$(this).closest('.switch-toggles').addClass('active');
		$(this).siblings().removeClass('active');
		company_price_table.addClass('active');
		individual_price_table.removeClass('active');			
	});


	// Wow Animations
	wow = new WOW(
	{
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
  }
  )
	wow.init();


    // Menu For Xs Mobile Screens
    if ($(window).height() < 450) {
    	$('#slide_out_menu').addClass('xs-screen');
    }

    $(window).on('resize', function(){
    	if ($(window).height() < 450) {
    		$('#slide_out_menu').addClass('xs-screen');
    	} else{
    		$('#slide_out_menu').removeClass('xs-screen');
    	}
    });


    // Magnific Popup
    // $(".lightbox").magnificPopup();



});


var 
$layer_1 = $('.layer-1'),

$container = $('#govern-header'),
container_w = $container.width(),
container_h = $container.height();

$(window).on('mousemove.parallax', function(event) {
	var pos_x = event.pageX,
	pos_y = event.pageY,
	left  = 0,
	top   = 0;

	left = container_w / 2 - pos_x;
	top  = container_h / 2 - pos_y;

	TweenMax.to(
		$layer_1, 
		1, 
		{ 
			css: { 
				transform: 'translateX(' + left / 8 + 'px) translateY(' + top / 8 + 'px)' 
			}, 
			ease:Expo.easeOut, 
			overwrite: 'all' 
		});

});

         