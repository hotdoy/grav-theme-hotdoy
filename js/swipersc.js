(function () {
	'use strict';

	var swiperSc = function(){
		let el = $('.swipersc');
		el.each(function(){
			var id = $(this).attr('id');
		    var swiper = new Swiper('#'+id, {
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
