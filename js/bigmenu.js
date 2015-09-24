(function( $, window, document ) {

	// Home Services Controls
	// -----------------------------------
	var $bigMenuItem = $('.big-menu .menu-item');

	$bigMenuItem.on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('selected').children('.big-menu-group').slideToggle('fast');
	});

}( window.jQuery, window, document ));