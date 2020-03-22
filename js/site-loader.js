(function () {
	'use strict';
	var siteLoader = function(){
		let	b = document.body;
		let e = document.getElementById('loader');
		let out = e.dataset.out ? e.dataset.out : '0';
		let rem = e.dataset.rem ? e.dataset.rem : '200';
		setTimeout(function(){ 
			if (!!b.classList.contains('loading')) {
				b.classList.add('loaded');
				b.classList.remove('loading');
				debug('loaded');
			}
		}, out);
		if (!!e) {
			setTimeout(function(){ 
				e.parentNode.removeChild(e);
			}, rem);
		}
	}
	siteLoader();
})();
