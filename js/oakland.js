(function( $, window, document ) {

	var menu = document.querySelector('.sticky-menu');
	var menuPosition = menu.getBoundingClientRect();
	var placeholder = document.createElement('div');
	placeholder.style.width = menuPosition.width + 'px';
	placeholder.style.height = menuPosition.height + 'px';
	var subnav = document.querySelector('.subnav');
	var subnavItem = document.querySelectorAll('.subnav .menu-item')
	var isOpen = true;
	var isFocused = false;

	document.addEventListener("DOMContentLoaded", function() {
    menu.parentNode.insertBefore(placeholder, menu);
	});

	window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 100 && isOpen) {
        $(subnavItem).not('.selected').slideUp('fast');
        $(subnav).addClass('sticky');
        isOpen = false;
    } else if (window.pageYOffset < 100 && !isOpen) {
        $(subnavItem).not('.selected').slideDown('fast');
        $(subnav).removeClass('sticky');
        isOpen = true;
    }
	});

	$(subnav).hover( function() {
		if( !isOpen ) {
			$(subnavItem).not('.selected').slideDown('fast');
		}
	}, function() {
		if( !isOpen ) {
			$(subnavItem).not('.selected').slideUp('fast');
		}
	});

	$(subnav).focusin( function() {
		if( !isOpen && !isFocused ) {
			$(subnavItem).not('.selected').slideDown('fast');
			isOpen = true;
			isFocused = true;
		}
	});

	$(subnavItem).last().focusout( function() {
		if( isOpen && isFocused ) {
			$(subnavItem).not('.selected').slideUp('fast');
			isOpen = false;
			isFocused = false;
		}
	});

	$(subnavItem).first().focusout( function() {
		if( isOpen && isFocused ) {
			$(subnavItem).not('.selected').slideUp('fast');
			isOpen = false;
			isFocused = false;
		}
	});

}( window.jQuery, window, document ));