// dependencies
// - site-loader.js
// - site-loader.css

(function ($) {
	'use strict';

	var siteLoader = function(){
		var loader = $('#site-loader-long');
		if (loader.length) {
			setTimeout(function(){
				$('body').addClass('loaded');
			}, 700);
		}
	}

	var siteTransition = function(){
		var loader = $('#site-loader-short');
		if (loader.length) {
			$(loader).fadeOut(200);
			$('body').addClass('loaded');
		}
	}

	var init = function () {
		siteTransition();
		siteLoader();
	};

	$(init);
	
})(jQuery);
