(function( $, window, document ) {

	var menu = document.querySelector('.sticky-menu');

	if (menu) {
		var menuPosition = menu.getBoundingClientRect();
		var placeholder = document.createElement('div');
		placeholder.style.width = menuPosition.width + 'px';
		placeholder.style.height = menuPosition.height + 84 + 'px';
		var subnav = document.querySelector('.subnav');
		var submenu = document.querySelector('.section-menu');
		var subnavItem = document.querySelectorAll('.subnav .menu-item')
		var isOpen = true;
		var isFocused = false;
		var isHovered = false;
		var alert = document.querySelector('.flash');
		// var subheader = document.querySelector('.subheader');
		// var subheaderHeight = $(subheader).height();

		document.addEventListener("DOMContentLoaded", function() {
	    menu.parentNode.insertBefore(placeholder, menu);
		});

		window.addEventListener('scroll', function() {
	    if (window.pageYOffset >= 50 && isOpen) {
	    		$(alert).slideUp('fast');
	        $(subnav).addClass('sticky');
	        $(subnavItem).not('.active').slideUp('fast', function() {
	        	$(subnav).addClass('done');
	        });
	        // $(subheader).height(0);
	        isOpen = false;
	    } else if (window.pageYOffset < 50 && !isOpen) {
	    		$(alert).slideDown('fast');
	    		$(subnav).removeClass('done');
	        $(subnavItem).not('.active').slideDown('fast');
	        $(subnav).removeClass('sticky');
	        // $(subheader).height(subheaderHeight);
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

	}

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
	if( $('.section').length ) {

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
		});

	}

	// Off-canvas nav
	var hamburger = document.querySelector('.header-nav-button');
	var close = document.querySelector('.header-nav-close');
	var overlay = document.querySelectorAll('.global-navigation-wrap, .global-navigation-wrap .container');
	var offCanvasNav = document.querySelector('body');
	var navIsOpen = false;

	$(hamburger).on('click', function(e) {
		e.preventDefault();
		if ( !navIsOpen ) {
			$(offCanvasNav).addClass('nav-visible');
			$(this).addClass('open');
			navIsOpen = true;
		} else {
			$(offCanvasNav).removeClass('nav-visible');
			$(this).removeClass('open');
			navIsOpen = false;
		}
	});

	$(overlay).on('click', function(e) {
		console.log(e.target);

		if ( e.target != this ) {
			return;
		}

		if ( navIsOpen ) {
			$(offCanvasNav).removeClass('nav-visible');
			$(hamburger).removeClass('open');
			navIsOpen = false;
		}
	})

}( window.jQuery, window, document ));