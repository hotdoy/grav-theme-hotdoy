(function () {
	'use strict';

	var productGallery = function(){
	    var galleryTop = new Swiper('.page--product .product__gallery', {
		    spaceBetween: 16,
		    pagination: {
		    	el: '.swiper-pagination',
		    	clickable: true,
			},
    	});
	}

	productGallery();

})();
