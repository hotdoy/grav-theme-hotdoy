(function ($) {
	'use strict';

	var swipersc = function(){
		let el = $('.swipersc');
		el.each(function(){
			var id = $(this).attr('id');
		    var swiper = new Swiper('#'+id, {
	    		spaceBetween: 10,
	    		pagination: {
    				el: '.swiper-pagination',
  				},
	    	});
	    	console.log(id);
		})
	}

	var init = function () {
		swipersc();
	};

	$(init);
})(jQuery);
