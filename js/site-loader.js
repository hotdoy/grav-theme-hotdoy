(function () {
	'use strict';
	var siteLoader = function(){
		let loader = document.querySelector('#site-loader');
		if (!!loader) {
			setTimeout(function(){ 
				loader.classList.add('loaded');
			}, 20);
		}
	}
	siteLoader();
})();
