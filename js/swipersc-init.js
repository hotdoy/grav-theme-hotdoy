(function ($) {
	'use strict';

	var swiperScInit = function(){
		let el = $('.swipersc');
		el.each(function(){
			var id = $(this).attr('id');
		    var swiper = new Swiper('#'+id, {
	    		spaceBetween: 10,
	    		pagination: {
    				el: '.swiper-pagination',
  				},
	    	});
		})
	}

	var init = function () {
		swiperScInit();
	};

	$(init);
})(jQuery);
