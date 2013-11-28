$("#Header-Chemische-Baustoffe").load('ajax/Header-Chemische-Baustoffe.html', function(){

	$('#main-featured-slider').dpUniSlider({

		fixedHeight: 360,

		slideTransitionEffect: 'horzontal',
		showArrows: false,
		showNavigation: true,
		navPosition: 'bottom',	
		autoSlide: true,
		autoSlideSpeed: 8000,
		startRandom: false,
		showAutoSlideIcon: false,
		loop: true,
		fixedHeight: 250,
    	draggable: false		
	});
		
	// smoothscroll
	$('a[href*=#]').click(function() {
    
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        && location.hostname == this.hostname) {
        
            var $target = $(this.hash);
            
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            
            if ($target.length) {
            
                var targetOffset = $target.offset().top;
                
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                    
                return false;
                
            }
            
        }
        
    });

});
$("#Header-Joe-Lisibach").load('ajax/Header-Joe-Lisibach.html', function(){

	$('#main-featured-slider').dpUniSlider({

		fixedHeight: 360,

		slideTransitionEffect: 'horzontal',
		showArrows: false,
		showNavigation: true,
		navPosition: 'bottom',	
		autoSlide: true,
		autoSlideSpeed: 8000,
		startRandom: false,
		showAutoSlideIcon: false,
		loop: true,
		fixedHeight: 250,
    	draggable: false				
	});

});
$("#Header-Aktuell").load('ajax/Header-Aktuell.html', function(){

	$('#main-featured-slider').dpUniSlider({

		fixedHeight: 360,

		slideTransitionEffect: 'horzontal',
		showArrows: false,
		showNavigation: true,
		navPosition: 'bottom',	
		autoSlide: true,
		autoSlideSpeed: 8000,
		startRandom: false,
		showAutoSlideIcon: false,
		loop: true,
		fixedHeight: 250,
    	draggable: false		
	});
	
		// smoothscroll
	$('a[href*=#]').click(function() {
    
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        && location.hostname == this.hostname) {
        
            var $target = $(this.hash);
            
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            
            if ($target.length) {
            
                var targetOffset = $target.offset().top;
                
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                    
                return false;
                
            }
            
        }
        
    });

});
$("#Footer-Chemische-Baustoffe").load('ajax/Footer-Chemische-Baustoffe.html',function(){

// Kontakt-Site overlay	
	
	    $("a[rel]").overlay({
 
        mask: {
        color: '#f0f0f0',
        loadSpeed: 100,
        opacity: 0.9
      	},
        effect: 'apple',
 
        onBeforeLoad: function() {
 
            // grab wrapper element inside content
            var wrap = this.getOverlay().find(".contentWrap");
 
            // load the page specified in the trigger
            wrap.load(this.getTrigger().attr("href"));
        }
 
    });
});
$("#Navigation-Chemische-Baustoffe").load('ajax/Navigation-Chemische-Baustoffe.html',function(){

// Selected Navigation Links

	current_page = document.location.href
	 
	if (current_page.match(/index/)) {
	$("#navigationMenu li:eq(0)").addClass('selected');
	} else if (current_page.match(/Ueber/)) {
	$("#navigationMenu li:eq(1)").addClass('selected');	
	} else if (current_page.match(/Aktuell/)) {
	$("#navigationMenu li:eq(2)").addClass('selected');
	} else if (current_page.match(/Produkte/)) {
	$("#navigationMenu li:eq(3)").addClass('selected');
	} else if (current_page.match(/Kontakt/)) {
	$("#navigationMenu li:eq(4)").addClass('selected');
	} else if (url="http://www.joe-lisibach.ch") {
	$("#navigationMenu li:eq(0)").addClass('selected');	
	} else { // don't mark any nav links as selected
	$("#navigationMenu li").removeClass('selected');
	};

// Easing Navigation Links

	$('#navigationMenu li .normalMenu').each(function(){	// for each menu item

		// create a duplicate hyperlink and position it above the current one
		$(this).before($(this).clone().removeClass().addClass('hoverMenu'));

	});

	$('#navigationMenu li').hover(function(){	// using the hover method..

		// we assign an action on mouse over
		$(this).find('.hoverMenu').stop().animate({marginTop:'0px'},200);
		// the animate method provides countless possibilities

	},

	function(){
		// and an action on mouse out
		$(this).find('.hoverMenu').stop().animate({marginTop:'-25px'},200);	

	});
	
// Kontakt-Site overlay	
	
	    $("a[rel]").overlay({
 
        mask: {
        color: '#f0f0f0',
        loadSpeed: 100,
        opacity: 0.9
      	},
        effect: 'apple',
 
        onBeforeLoad: function() {
 
            // grab wrapper element inside content
            var wrap = this.getOverlay().find(".contentWrap");
 
            // load the page specified in the trigger
            wrap.load(this.getTrigger().attr("href"));
        }
 
    });
	
// hide #back-top first
	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 600);
			return false;
		});
	});


});

