function reveal(e){
	if (e.classList.contains('unrevealed')) {
		let revealClass = e.getAttribute('data-reveal').length ? e.getAttribute('data-reveal') : 'revealed';
		if (!!revealClass) {
			let revealClassArray = revealClass.split(" ");
			e.classList.add(...revealClassArray);
			
	        let style = getComputedStyle(e);
	        let animationDuration = parseFloat(style.animationDuration.slice(0,-1));
	        let transitionDuration = parseFloat(style.transitionDuration.slice(0,-1));
	        let animationDelay = parseFloat(style.animationDelay.slice(0,-1));
	        let transitionDelay = parseFloat(style.transitionDelay.slice(0,-1));
	        let totalDelay = (animationDuration + animationDelay + transitionDelay + transitionDuration) * 1000;
	        setTimeout(function(){ 
	        	e.classList.remove('unrevealed');
	        }, totalDelay);

		    e.addEventListener('transitionend', () =>{
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
