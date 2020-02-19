(function ($) {
	'use strict';

	var siteLoader = function(){
		var loader = $('#site-loader');
		if (loader.length) {
			setTimeout(function(){ 
				$('body').addClass('loaded');
			}, 20);
		}
	}

	var init = function () {
		siteLoader();
	};

	$(init);
	
})(jQuery);
