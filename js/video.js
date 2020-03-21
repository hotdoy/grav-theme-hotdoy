(function () {
	'use strict';

	let video = function(){
		const elements = document.querySelectorAll('video');
		const config = {rootMargin: '0px', threshold: 0};
		let observer = new IntersectionObserver(onIntersection, config);
		
		elements.forEach(element => {
		  observer.observe(element);
		});

		function onIntersection(elements) {
	  		elements.forEach(el => {
				if (el.intersectionRatio > 0) {
					el.target.play(); 
				} else {
					el.target.pause();
				}
			});
		}
	}

	video();
	
})();



