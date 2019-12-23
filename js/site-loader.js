(function ($) {
	'use strict';

	var siteLoader = function(){
		var loader = $('#site-loader');
		if (loader.length) {
			$('body').addClass('loaded');
		}
	}

	var init = function () {
		siteLoader();
	};

	$(init);
	
})(jQuery);
