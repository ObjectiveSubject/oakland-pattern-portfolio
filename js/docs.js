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

	// Side Nav accordian
	// -----------------------------------
	$('.sub-menu-toggle').click(function(e){
		e.preventDefault();

		var $this = $(this),
			$parent = $this.parents('.top-level-menu'),
			$subNav = $this.siblings('.nav-sub-menu');

		$subNav.slideToggle(300);
		$parent.toggleClass('open');

	});

}( window.jQuery, window, document ));

(function( $, window, document ) {

	// Masthead
	// -----------------------------------
	var $window = $(window),
		winTop = $window.scrollTop(),
		$masthead = $('.masthead'),
		threshold = $('.jumbotron').outerHeight() - $masthead.outerHeight();

	$window.scroll(function(){
		winTop = $window.scrollTop();
		
		if ( winTop >= threshold ) {
			$masthead.addClass('show-title');
		} else {
			$masthead.removeClass('show-title');
		}
	});

}( window.jQuery, window, document ));