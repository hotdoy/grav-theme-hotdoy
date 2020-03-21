(function () {
	'use strict';
	var siteLoader = function(){
		let e = document.getElementById('loader');
		let dur = e.dataset.duration ? e.dataset.duration : '90';
		if (!!e) {
			setTimeout(function(){ 
				e.classList.add('loaded');
			}, dur);
			e.addEventListener('animationend', () =>{
				e.parentNode.removeChild(e);
			})
		}
	}
	siteLoader();
})();
