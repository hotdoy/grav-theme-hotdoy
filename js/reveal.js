var Reveal = (function(){
	var self = {};

	var RevealElement = function(e) {
		if (e.classList.contains('unrevealed')) {
			let revealClass = e.getAttribute('data-reveal').length ? e.getAttribute('data-reveal') : 'revealed';
			if (!!revealClass) {
				let revealClassArray = revealClass.split(" ");
				e.classList.add(...revealClassArray);
		        setTimeout(function(){ 
		        	e.classList.remove('unrevealed');
		        }, TotalDelay(e));
			    e.addEventListener('transitionend', () =>{
			    	e.classList.remove('unrevealed');	
			    })
			}
		}
	};

	var TotalDelay = function(e) {
		let style = getComputedStyle(e);
		let adu = parseFloat(style.animationDuration.slice(0,-1));
		let tdu = parseFloat(style.transitionDuration.slice(0,-1));
		let ade = parseFloat(style.animationDelay.slice(0,-1));
		let tde = parseFloat(style.transitionDelay.slice(0,-1));
		let totalDelay = (adu + ade + tde + tdu) * 1000;
		return totalDelay;
	};

	var PrimeChildren = function() {
		let e = document.querySelectorAll('[data-reveal-children]');
		if (!!e) {
			for (var i0 = 0; i0 < e.length; i0++) {
				let classList = e[i0].dataset.revealChildren ? e[i0].dataset.revealChildren : '';
				let c = e[i0].children;
				if (!!c) {
					for (var i1 = 0; i1 < c.length; i1++) {
						c[i1].setAttribute('data-reveal', classList);
					}
				}
			}		
		}
	};

	self.Init = function() {
		PrimeChildren();
		let elements = document.querySelectorAll('[data-reveal]');
		let start = document.querySelector('[data-reveal-start]');
		start = start ? start.dataset.revealStart : '0';
		let observer = new IntersectionObserver(onIntersection, {rootMargin: '-20px', threshold: 0.1});	
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
					RevealElement(e.target);
				}
			})
		}
	};
	
	return self;
}());

Reveal.Init();
