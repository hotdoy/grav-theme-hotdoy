(function () {
	'use strict';

	let links = function(){
		let links = document.querySelectorAll('a');
		let strategy = document.body.getAttribute('data-links');

		links.forEach(a => {
			let href = a.getAttribute('href');

			if (!!href && href.match('^http')) {
				a.setAttribute('target', '_blank');
				a.setAttribute('rel', 'noopener');
			}

			else if (!!href && href.match('^/')) {
				if (!!strategy) {
					let preLoadLink = document.createElement("link");
					preLoadLink.rel = strategy;
	    			preLoadLink.href = href;
					document.head.appendChild(preLoadLink);
				}
			}	
		})
	}

	links();
	
})();
