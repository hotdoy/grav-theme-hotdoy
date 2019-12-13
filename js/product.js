(function ($) {
	'use strict';

	var productSwiper = function(){
	    var galleryThumbs = new Swiper('.product-gallery-thumbs', {
		    spaceBetween: 10,
		    slidesPerView: 6,
		    freeMode: true,
		    watchSlidesVisibility: true,
		    watchSlidesProgress: true,
	    });
	    var galleryTop = new Swiper('.product-gallery-top', {
	    	spaceBetween: 10,
	    	thumbs: {
	    	swiper: galleryThumbs
	    	}
    	});
	}

	var init = function () {
		productSwiper();
	};

	$(init);
})(jQuery);
