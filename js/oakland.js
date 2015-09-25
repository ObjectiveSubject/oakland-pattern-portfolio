(function( $, window, document ) {

	// Sticky subnav
	// ------------------------------------
	var menu = document.querySelector('.section-menu');
	var mediaQueryMed = document.querySelector('.js-media-query-med');

	if (menu && mediaQueryMed.offsetParent != null ) {
		var menuPosition = menu.getBoundingClientRect();
		var menuTop = menuPosition.top - 123;
		var placeholder = document.createElement('div');
		placeholder.style.width = menuPosition.width + 20 + 'px';
		placeholder.style.height = menuPosition.height + 'px';
		placeholder.style.styleFloat = "left";
		placeholder.style.cssFloat = "left";
		placeholder.style.position = "absolute";
		var subnavItem = document.querySelectorAll('.section-menu .menu-item')
		var isOpen = true;
		var isFocused = false;
		var isHovered = false;

		menu.parentNode.insertBefore(placeholder, menu);

		// Function for opening and closing the subnav on scroll, used by waypoint js lib
		// -----------------------------------
		function subnavToggle() {
			if ( isOpen ) {
				$(menu).addClass('sticky');
				$(placeholder).css('position', 'relative');
				$(subnavItem).not('.active').slideUp('fast');
        isOpen = false;
			} else if ( !isOpen ) {
				$(menu).removeClass('sticky');
				$(placeholder).css('position', 'absolute');
				$(subnavItem).not('.active').slideDown('fast');
				isOpen = true;
			}
			console.log(isOpen);
		}

		if (window.pageYOffset >= 150 && isOpen) {
			subnavToggle();
			isOpen = false;
		}

		// Waypoint for section-menu
		$(menu).waypoint(function(direction) {
			subnavToggle();
		}, {
			offset: 123
		});

		// Sticky nav hover behavior
		$(menu).hover( function() {
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

		// Need to figure out a better solution for Focus support
	// -----------------------------------
		// $(menu).focusin( function() {
		// 	if( !isOpen && !isFocused ) {
		// 		$(subnavItem).not('.active').slideDown('fast');
		// 		isOpen = true;
		// 		isFocused = true;
		// 	}
		// });

		// $(subnavItem).last().focusout( function() {
		// 	if( isOpen && isFocused ) {
		// 		$(subnavItem).not('.active').slideUp('fast');
		// 		isOpen = false;
		// 		isFocused = false;
		// 	}
		// });

		// $(subnavItem).first().focusout( function() {
		// 	if( isOpen && isFocused ) {
		// 		$(subnavItem).not('.active').slideUp('fast');
		// 		isOpen = false;
		// 		isFocused = false;
		// 	}
		// });

	}

	// Change active state on scroll
	// -----------------------------------
	var sections = $('.section')
	  , header = $('.header-wrap')
	  , nav = $('.section-menu');

	$(subnavItem).on('click', function () {
	  var $el = $(this)
	    , id = $el.attr('href');

    $el.addClass('active').siblings('.active').removeClass('active');
	 
	  $('html, body').animate({
	    scrollTop: $(id).offset().top - 185
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
	// -----------------------------------
	if( $('.section').length ) {

		var $waypointSections = $('.section');

		$waypointSections.waypoint(function(direction) {
			console.log(this.element.id);
			if ( direction === 'down' ) {
				swapNav(this.element.id);
			}
		}, {
			offset: 185
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
	// -----------------------------------
	var hamburger = document.querySelector('.header-nav-button');
	var close = document.querySelector('.header-nav-close');
	var logo = document.querySelector('.logo-wrap');
	var logoOffset = $(logo).offset();
	var menuWidth = $(logo).width();
	var menuLeft = logoOffset.left;
	var navWrap = document.querySelectorAll('.global-navigation-wrap');
	var overlay = '';
	var body = document.querySelector('body');
	var navIsOpen = false;

	$(hamburger).on('click', function(e) {
		e.preventDefault();
		if ( !navIsOpen ) {
			$(body).addClass('nav-visible');
			if ( mediaQueryMed.offsetParent === null ) {
				// $(navWrap).width('80%').css('left', '0px');
			} else {
				$(navWrap).width(menuWidth).css('left', menuLeft + 'px');
			}
			$(this).addClass('open');
			navIsOpen = true;
		} else {
			$(body).removeClass('nav-visible');
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
	});

}( window.jQuery, window, document ));