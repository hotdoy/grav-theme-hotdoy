(function () {
	'use strict';
	let links = function(){
		let b = document.body;
		let links = document.querySelectorAll('a');
		links.forEach(a => {
			let href = a.getAttribute('href');
			if (!!href && href.match('^http')) {
				a.setAttribute('target', '_blank');
				a.setAttribute('rel', 'noopener');
			}
			else if (!!href && href.match('^/')) {
				a.addEventListener('click', function(){
					b.classList.add('exiting');
					debug('exiting');
				});
				let preLoadLink = document.createElement("link");
				preLoadLink.rel = 'preconnect';
    			preLoadLink.href = href;
				document.head.appendChild(preLoadLink);
			}
		})
	}
	links();
})();
