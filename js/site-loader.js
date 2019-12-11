(function ($) {
	'use strict';

	var siteLoader = function(){
		var loader = $('#site-loader');
		if (loader.length) {
			$(loader).fadeOut(200);
			$('body').addClass('loaded');
		}
	}

	var init = function () {
		siteLoader();
	};

	$(init);
	
})(jQuery);
