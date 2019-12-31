(function ($) {
	'use strict';

	var initSwiper = function(){
		let el = $('.swipersc');
		el.each(function(){
			var id = $(this).attr('id');
		    var swiper = new Swiper('#'+id, {
		    	scrollbar: {
		    		el: '.swiper-scrollbar',
		    		draggable: true,
				},
	    	});
		})
	}

	var init = function () {
		initSwiper();
	};

	$(init);
})(jQuery);
