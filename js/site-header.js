(function ($) {
	'use strict';

	var toggleNav = function(){

		$('.mobile-nav-open').on('click touch', function () {
			if ($('.mobile-nav-panel').hasClass('deployed')) {
				$('.mobile-nav-panel-veil').fadeOut(200);
				$('.mobile-nav-panel').removeClass('deployed');
			} else {
				$('.mobile-nav-panel').addClass('deployed');
				$('.mobile-nav-panel-veil').fadeIn(200);
			}
		});

		$('.mobile-nav-panel-veil, .mobile-nav-close').on('click touch', function () {
			if ($('.mobile-nav-panel').hasClass('deployed')) {
				$('.mobile-nav-panel-veil').fadeOut(200);
				$('.mobile-nav-panel').removeClass('deployed');
			} else {
				$('.mobile-nav-panel').addClass('deployed');
				$('.mobile-nav-panel-veil').fadeIn(200);
			}
		});

		$('.mobile-nav-open').on('click touch', function(event){
		    event.stopPropagation();
		});
	}

	var init = function () {
		toggleNav();
	};

	$(init);
	
})(jQuery);
