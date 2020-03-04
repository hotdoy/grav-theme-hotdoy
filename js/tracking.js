(function () {
	'use strict';
	var tracking = function(){
		let e = document.getElementById('tracking');
		if (!!e) {
			let src = e.getAttribute('data-ref');
			let iframe = document.createElement('iframe');
			iframe.setAttribute('loading', 'lazy');
			iframe.src = src;
			iframe.style.display = 'none';
			e.appendChild(iframe);
		}
	}
	tracking();
})();
