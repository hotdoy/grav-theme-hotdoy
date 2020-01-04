(function ($) {
	'use strict';

	var productGallery = function(){
	    var galleryTop = new Swiper('.page--product .product__gallery', {
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
