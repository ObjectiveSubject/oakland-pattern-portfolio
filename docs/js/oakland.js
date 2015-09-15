(function( $, window, document ) {

	var menu = document.querySelector('.sticky-menu');
	var menuPosition = menu.getBoundingClientRect();
	var placeholder = document.createElement('div');
	placeholder.style.width = menuPosition.width + 'px';
	placeholder.style.height = menuPosition.height + 'px';
	var subnav = document.querySelector('.subnav');
	var submenu = document.querySelector('.section-menu');
	var subnavItem = document.querySelectorAll('.subnav .menu-item')
	var isOpen = true;
	var isFocused = false;
	var isHovered = false;
	var subheader = document.querySelector('.subheader');
	var subheaderHeight = $(subheader).height();

	document.addEventListener("DOMContentLoaded", function() {
    menu.parentNode.insertBefore(placeholder, menu);
	});

	window.addEventListener('scroll', function() {
    if (window.pageYOffset >= 50 && isOpen) {
        $(subnavItem).not('.active').slideUp('fast');
        $(subnav).addClass('sticky');
        $(subheader).height(0);
        isOpen = false;
    } else if (window.pageYOffset < 50 && !isOpen) {
        $(subnavItem).not('.active').slideDown('fast');
        $(subnav).removeClass('sticky');
        $(subheader).height(subheaderHeight);
        isOpen = true;
    }
	});

	$(submenu).hover( function() {
		if( !isOpen ) {
			$(subnavItem).not('.active').stop().slideDown('fast');
			isHovered = true;
		}
	}, function() {
		if( !isOpen ) {
			$(subnavItem).not('.active').stop().slideUp('fast');
			isHovered = false;
		}
	});

	$(subnav).focusin( function() {
		if( !isOpen && !isFocused ) {
			$(subnavItem).not('.active').slideDown('fast');
			isOpen = true;
			isFocused = true;
		}
	});

	$(subnavItem).last().focusout( function() {
		if( isOpen && isFocused ) {
			$(subnavItem).not('.active').slideUp('fast');
			isOpen = false;
			isFocused = false;
		}
	});

	$(subnavItem).first().focusout( function() {
		if( isOpen && isFocused ) {
			$(subnavItem).not('.active').slideUp('fast');
			isOpen = false;
			isFocused = false;
		}
	});

	// Change active state on scroll
	var sections = $('.section')
	  , nav = $('.sticky-menu')
	  , navHeight = nav.outerHeight();

	nav.find('a.menu-item').on('click', function () {
	  var $el = $(this)
	    , id = $el.attr('href');

    $el.addClass('active').siblings('.active').removeClass('active');
	 
	  $('html, body').animate({
	    scrollTop: $(id).offset().top - 165
	  }, 500);
	 
	  return false;
	});

	function swapNav(id) {
		if( !isOpen && !isHovered ) {
			nav.find('a.menu-item[href="#' + id + '"]')
				.addClass('active')
				.show()
				.siblings('a.active')
				.removeClass('active')
				.hide();
		} else {
			nav.find('a.menu-item[href="#' + id + '"]')
				.addClass('active')
				.siblings('a.active')
				.removeClass('active');
		}
	}

	// Waypoints
	var $waypointSections = $('.section');

	$waypointSections.waypoint(function(direction) {
		console.log(this.element.id);
		if ( direction === 'down' ) {
			swapNav(this.element.id);
		}
	}, {
		offset: 165
	});

	$waypointSections.waypoint(function(direction) {
		if ( direction === 'up' ) {
			swapNav(this.element.id);
		}
	}, {
		offset: 100
	})

}( window.jQuery, window, document ));