(function ($) {
	'use strict';

	var initSwiper = function(){
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

	var init = function () {
		initSwiper();
	};

	$(init);
})(jQuery);
