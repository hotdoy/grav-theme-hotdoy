function links(sel){
	let body = document.body;
	let links = document.querySelectorAll(sel);
	links.forEach(link => {
		let href = link.getAttribute('href');
		if (!!href && href.match('^http')) {
			link.setAttribute('target', '_blank');
			link.setAttribute('rel', 'noopener');
		}
		else if (!!href && href.match('^/')) {
			link.addEventListener('click', function(){
				body.classList.add('exiting');
				debug('exiting');
			});
			let preLoadLink = document.createElement("link");
			preLoadLink.rel = 'preconnect';
			preLoadLink.href = href;
			document.head.appendChild(preLoadLink);				
		}
	})
}
links('a');
