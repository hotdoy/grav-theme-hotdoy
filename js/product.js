(function ($) {
	'use strict';

	var productGallery = function(){
	    var galleryTop = new Swiper('.product__gallery', {
	    	scrollbar: {
	    		el: '.swiper-scrollbar',
	    		draggable: true,
			},
    	});
	}

	var init = function () {
		productGallery();
	};

	$(init);
})(jQuery);
