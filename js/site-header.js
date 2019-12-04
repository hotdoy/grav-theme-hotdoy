(function ($) {
	'use strict';

	var toggleNav = function(){

		$('.mobile-nav-open').on('click touch', function () {
			if ($('.mobile-nav-panel').hasClass('deployed')) {
				$('.mobile-nav-panel').removeClass('deployed');
			} else {
				$('.mobile-nav-panel').addClass('deployed');
			}
		});

		$('.mobile-nav-close').on('click touch', function () {
			if ($('.mobile-nav-panel').hasClass('deployed')) {
				$('.mobile-nav-panel').removeClass('deployed');
			}
		});
	}

	var init = function () {
		toggleNav();
	};

	$(init);
	
})(jQuery);
