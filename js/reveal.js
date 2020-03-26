function reveal(e){
	if (e.classList.contains('unrevealed')) {
		let revealClass = e.getAttribute('data-reveal') ? e.getAttribute('data-reveal') : 'reveal';
		if (!!revealClass) {
			let revealClassArray = revealClass.split(" ");
			e.classList.add(...revealClassArray);
		    e.addEventListener('animationend', () =>{
		    	e.classList.remove('unrevealed');
		    })
		}
	}
}

function initReveal(){
	let elements = document.querySelectorAll('[data-reveal]');
	let start = document.querySelector('[data-reveal-start]');
	start = start ? start.dataset.revealStart : '0';
	let observer = new IntersectionObserver(onIntersection, {rootMargin: '-30px', threshold: 0.1});	
	elements.forEach(e => {
		e.classList.add('unrevealed');
	});
	setTimeout(function(){
		elements.forEach(e => {
			observer.observe(e);
		});
	}, start);
	function onIntersection(elements) {
		elements.forEach(e => {
			if (e.intersectionRatio > 0) {
				observer.unobserve(e.target);
				reveal(e.target);
			}
		})
	}
}

initReveal();
