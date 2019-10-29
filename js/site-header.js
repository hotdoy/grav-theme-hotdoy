(function ($) {
	'use strict';

	var toggleNav = function(){

		$('.site-nav-toggle').on('click touch', function () {
			if ($('.site-nav-panel').hasClass('deployed')) {
				$('.site-nav-panel-veil').fadeOut(200);
				$('.site-nav-panel').removeClass('deployed');
			} else {
				$('.site-nav-panel').addClass('deployed');
				$('.site-nav-panel-veil').fadeIn(200);
			}
		});

		$('.site-nav-panel-veil').on('click touch', function () {
			if ($('.site-nav-panel').hasClass('deployed')) {
				$('.site-nav-panel-veil').fadeOut(200);
				$('.site-nav-panel').removeClass('deployed');
			} else {
				$('.site-nav-panel').addClass('deployed');
				$('.site-nav-panel-veil').fadeIn(200);
			}
		});

		$('.site-nav-toggle').on('click touch', function(event){
		    event.stopPropagation();
		});
	}

	var init = function () {
		toggleNav();
	};

	$(init);
	
})(jQuery);
