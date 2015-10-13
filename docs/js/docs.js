(function( $, window, document ) {

	// Home Services Controls
	// -----------------------------------
	var $bigMenuItem = $('.big-menu .menu-item');

	$bigMenuItem.on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('selected').children('.big-menu-group').slideToggle('fast');
	});

}( window.jQuery, window, document ));

(function( $, window, document ) {

	// Masthead
	// -----------------------------------
	var $window = $(window),
		winTop = $window.scrollTop(),
		$masthead = $('.masthead'),
		$mastheadTitle = $masthead.find('.page-title'),
		$pageTitle = $('.jumbotron h1'),
		threshold = $pageTitle.offset().top - $masthead.outerHeight(),
		fadeIn, fadeOut;

	$window.scroll(function(){
		winTop  = $window.scrollTop();
		fadeIn  = -1 + ( winTop /  threshold    );
		fadeOut =  2 - ( winTop / (threshold/2) );
		//         ^ OFFSET					 ^ FADESPEED
		//		  	 Numbers further from	   Higher numbers increase	
		// 		  	 zero will delay the 	   the speed of the fade.
		// 		  	 opacity change.

		$mastheadTitle.css( 'opacity', fadeIn );
		$pageTitle.css( 'opacity', fadeOut );
	});

}( window.jQuery, window, document ));