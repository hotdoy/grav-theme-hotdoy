// dependencies
// 	- slow3g.css
// 	- slow3g.html.twig

(function ($) {
	'use strict';

	var slow3g = function(){
		let links = document.querySelectorAll('a:not([href^=http])');
		const message = document.querySelector('.slow3g');
		links.forEach( a => {
			a.addEventListener("click", function (event) {
				setTimeout(function(){
					message.style.display = 'block';
				}, 2000);
			});
		});
	}

	var init = function () {
		slow3g();
	};

	$(init);
})(jQuery);
