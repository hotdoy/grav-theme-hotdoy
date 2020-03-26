(function () {
	'use strict';

	let initSwiper = function(){
		let el = $('.init-swiper');
		el.each(function(){
			let id = $(this).attr('id');
		    let swiper = new Swiper('#'+id, {
		    	autoHeight: true,
		    	spaceBetween: 16,
		    	pagination: {
		    		el: '.swiper-pagination',
		    		clickable: true,
				},
	    	});
		})
	}
	initSwiper();
})();
