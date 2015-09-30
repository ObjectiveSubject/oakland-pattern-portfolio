(function( $, window, document ) {

	// Sticky subnav
	// ------------------------------------
	var menu = document.querySelector('.section-menu');
	var mediaQueryMed = document.querySelector('.js-media-query-med');

	if (menu && mediaQueryMed.offsetParent != null ) {
		var menuPosition = menu.getBoundingClientRect();
		var menuTop = menuPosition.top - 126;
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
				$(subnavItem).not('.active').hide();
        isOpen = false;
			} else if ( !isOpen ) {
				$(menu).removeClass('sticky');
				$(placeholder).css('position', 'absolute');
				$(subnavItem).not('.active').show();
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
			offset: -126
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

	// Waypoints http://imakewebthings.com/waypoints/api/waypoint/
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
			offset: 50
		});

	}

	// Off-canvas nav
	// -----------------------------------
	var $navWrap = $('.global-navigation-wrap');
	var $nav = $('.global-navigation');
	var overlay = '';
	var $body = $('body');
	var $window = $(window);
	var navIsOpen = false;
	var hamburger = document.querySelector('.header-nav-button');
	var close = document.querySelector('.header-nav-close');

	var $logo = $('.logo-wrap');
  var offset = $logo.offset();
  var logoLeft = offset.left;
  var logoWidth = $logo.outerWidth();
  var logoRight = $window.width() - logoLeft - logoWidth;

	var offsetY = window.pageYOffset;

	$navWrap.css('right', logoRight + 'px');
	$nav.width(logoWidth);

	$(hamburger).on('click', function(e) {
		e.preventDefault();
		if ( !navIsOpen ) {
			offsetY = window.pageYOffset;
			$body.addClass('nav-visible').css({
				'position': 'fixed',
				'top': -offsetY + 'px'
			});
			$navWrap.fadeIn(300);
			if ( mediaQueryMed.offsetParent === null ) {
				// $(navWrap).width('80%').css('left', '0px');
			} else {
				// desktop
			}
			$(this).addClass('open');
			navIsOpen = true;
		} else {
			$body.removeClass('nav-visible').css({
				'position': 'static'
			});
			$navWrap.fadeOut(300);
			$(this).removeClass('open');
			$window.scrollTop(offsetY);
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