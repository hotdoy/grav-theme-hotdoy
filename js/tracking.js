(function ($) {
	'use strict';

	var tracking = function(){
		let e = document.querySelector('#tracking');
		let src = e.getAttribute('data-ref');
		let iframe = document.createElement('iframe');
		iframe.src = src;
		iframe.style.display = 'none';
		e.appendChild(iframe);
	}

	var init = function () {
		tracking();
	};

	$(init);
})(jQuery);
