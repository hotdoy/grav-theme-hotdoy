(function () {
	'use strict';
	var siteLoader = function(){
		let loader = document.getElementById('loader');
		let duration = loader.dataset.duration ?? '20';
		console.log(duration);
		if (!!loader) {
			setTimeout(function(){ 
				loader.classList.add('loaded');
			}, duration);
			loader.addEventListener('animationend', () =>{
				loader.parentNode.removeChild(loader);
			})
		}
	}
	siteLoader();
})();
