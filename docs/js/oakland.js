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
			// console.log(isOpen);
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
			// console.log(this.element.id);
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
	var $navWrap = $('.global-navigation-wrap'),
		$nav = $('.global-navigation'),
		$body = $('body'),
		$window = $(window),
		$hamburger = $('.header-nav-button'),
		// $close = $('.header-nav-close'),
		$overlay = $('.main-overlay'),
		navIsOpen = false;

	setNavPosition();

	$hamburger.on('click', function(e) {
		e.preventDefault();
		if ( !navIsOpen ) {
			openNav();
		} else {
			closeNav();
		}
	});

	$window.on('resize', throttle(function(){
		setNavPosition();
	}, 500, { leading: false }));

	$overlay.on('click', function(e) {
		if ( e.target != this ) {
			return;
		}
		if ( navIsOpen ) {
			closeNav();
		}
	});

	function setNavPosition() {
		var $logo = $('.logo-wrap'),
			offset = $logo.offset(),
			logoLeft = offset.left,
			logoWidth = window.innerWidth < 768 ? '100%' : $logo.outerWidth(),
			logoRight = window.innerWidth < 768 ? 0 : ($window.width() - logoLeft - logoWidth),
			offsetY = window.pageYOffset;

		$navWrap.css('right', logoRight + 'px');
		$nav.width(logoWidth);
	}

	function openNav() {
		offsetY = window.pageYOffset;
		$body.addClass('nav-visible').css({
			'position': 'fixed',
			'top': -offsetY + 'px'
		});
		$navWrap.fadeIn({
			duration: 300,
			complete: function(){
				$nav.fadeIn(300);
			}
		});

		if ( mediaQueryMed.offsetParent === null ) {
			// $(navWrap).width('80%').css('left', '0px');
		} else {
			// desktop
		}
		$hamburger.addClass('open');
		navIsOpen = true;
	}

	function closeNav() {
		$nav.fadeOut({
			duration: 300,
			complete: function(){
				$navWrap.fadeOut(300);
				$body.removeClass('nav-visible').css({
					'position': 'static'
				});
				$hamburger.removeClass('open');
				$window.scrollTop(offsetY);
				navIsOpen = false;
			}
		});
	}

	// Adapted from Underscore.js --> _.throttle()
	function throttle(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : Date.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = Date.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

}( window.jQuery, window, document ));