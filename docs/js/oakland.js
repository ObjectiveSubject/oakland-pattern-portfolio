
/* -----------------------------------------------
 * Sticky subnav
 * ----------------------------------------------- */

( function( $, window, document ) {

	var $menu = $('.section-menu');

	if ( $menu.length > 0 ) {

		var $subnavItem = $('.section-menu .menu-item');

		$('.header-wrap').append('<div class="sticky-nav closed invisible"><div class="container"><nav class="sticky-section-menu">'+$menu.html()+'</nav></div></div>');
		
		var $stickyNav = $('.sticky-nav'),
			$stickyContainer = $('.sticky-nav .container'),
			$stickySectionMenu = $('.sticky-section-menu'),
			$stickyMenu = $('.sticky-menu'),
			offset = $stickyMenu.height() + $stickyNav.height() + 50;

		$('body')
			.on('click', '.sticky-nav .menu-item', function(event){
				var that = this,
					target = $(that).attr('href');
					targetOffset = $(target).offset().top - offset;

				$(that).blur();

				if ( $stickyNav.hasClass('closed') ) {
					$stickyContainer.css('height', $stickySectionMenu.height());
					$stickyNav.toggleClass('closed open');
				} else {
					$stickyContainer.css('height', '100%');
					$stickyNav.toggleClass('closed open');
					$('body, html').animate({scrollTop: targetOffset + 'px' });
				}

				$(document).click(function(ev){
					$stickyContainer.css('height', '100%');
					$stickyNav.toggleClass('closed open');
				});

				return false;
			});

		// Waypoints http://imakewebthings.com/waypoints/api/waypoint/
		// -----------------------------------
		if( $('.section').length ) {

			var $waypointSections = $('.section');

			$waypointSections.waypoint(function(direction) {
				// console.log(this.element.id);
				if ( direction === 'down' ) {
					activateItem(this.element.id);
				}
			}, {
				offset: offset
			});

			$waypointSections.waypoint(function(direction) {
				if ( direction === 'up' ) {
					activateItem(this.element.id);
				}
			}, {
				offset: 50
			});

		}

		$('.section-menu').waypoint(function(direction){
			$stickyNav.toggleClass('visible invisible');
		});


		// Function to show active menu-item in sticky nav
		// -----------------------------------
		function activateItem(id) {
			var $target = $stickyNav.find('a.menu-item[href="#' + id + '"]'),
				top = ($target.index() * ( $target.outerHeight() * -1 ));
			
			$target.addClass('active')
				.siblings('a.active')
				.removeClass('active');

			$stickySectionMenu.css({marginTop: top + 'px' });
		}

	}

}( window.jQuery, window, document ));


/* -----------------------------------------------
 * Off-canvas nav
 * ----------------------------------------------- */
( function( $, window, document ) {

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