(function ($) {
	'use strict';

	var addRevealStyle = function(){
		var css = '.unrevealed{opacity:0;}.revealed{opacity:1;transition:opacity 0.7s;}';
		$('<style>').text(css).appendTo(document.head);
	}

	var reveal = function(){
		const elements = document.querySelectorAll('*[data-reveal]');
		const observerConfig = {rootMargin: '0px', threshold: 0.1};
		let initialDelay = document.querySelector('[data-reveal-initialdelay]');
		let observer = new IntersectionObserver(onIntersection, observerConfig);
				
		if (initialDelay != null) {
			initialDelay = initialDelay.getAttribute('data-reveal-initialdelay');
			elements.forEach(el => {
				el.classList.add('unrevealed');
			});
			setTimeout(function(){
				elements.forEach(el => {
					observer.observe(el);
				});
			}, initialDelay);
		} else{
			elements.forEach(el => {
				observer.observe(el);
			});
		}

		function onIntersection(elements) {
	  		elements.forEach(el => {
				if (el.intersectionRatio > 0) {

					observer.unobserve(el.target);
					
			  		if (el.target.classList.contains('unrevealed')) {
			  			let revealClass = el.target.getAttribute('data-reveal');
			  			if (revealClass.length) {
			  				let revealClassArray = revealClass.split(" ");
			  				el.target.addEventListener('animationend', function(){
			  					el.target.classList.remove('unrevealed');
			  				})
			  				el.target.classList.add(...revealClassArray);
			  			} else{
			  				el.target.classList.add('revealed');
			  				el.target.classList.remove('unrevealed');
			  			}
			   		}
				}
				else{
					if (initialDelay == null) {
						el.target.classList.add('unrevealed');
					}
				}
			});
		}
	}

	var init = function () {
		addRevealStyle();
		reveal();
	};

	$(init);
})(jQuery);
