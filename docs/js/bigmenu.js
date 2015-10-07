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
	$('.expand-sub-menu').click(function(e){
		var $this = $(this),
			$parent = $this.parents('.top-level-menu'),
			$subNav = $this.siblings('.nav-sub-menu');

		$subNav.slideToggle(300);
		$parent.toggleClass('open');
	});

}( window.jQuery, window, document ));