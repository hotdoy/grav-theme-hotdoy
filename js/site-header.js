(function ($) {
	'use strict';

	var toggleNav = function(){

		$('.header__toggle-on').on('click touch', function () {
			if ($('.header__panel').hasClass('header__panel--on')) {
				$('.header__panel').removeClass('header__panel--on');
			} else {
				$('.header__panel').addClass('header__panel--on');
			}
		});

		$('.header__toggle-off').on('click touch', function () {
			if ($('.header__panel').hasClass('header__panel--on')) {
				$('.header__panel').removeClass('header__panel--on');
			}
		});
	}

	var init = function () {
		toggleNav();
	};

	$(init);
	
})(jQuery);
