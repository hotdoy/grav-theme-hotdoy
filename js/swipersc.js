(function () {
	'use strict';

	let swiperSc = function(){
		let el = $('.swipersc');
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
	swiperSc();
})();
