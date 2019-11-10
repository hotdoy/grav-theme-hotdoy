(function ($) {
	'use strict';
	var marquee = function(){
		var storedTs  = localStorage.getItem('marquee-ts');
		if (storedTs == null || Date.now() - storedTs > 21600) {
			$('.marquee').show();
		}

		$('.marquee .close').on('click touch', function () {
			$('.marquee').slideUp();
			localStorage.setItem('marquee-ts', Date.now());
		});
	}

	var init = function () {
		marquee();
	};

	$(init);
})(jQuery);
