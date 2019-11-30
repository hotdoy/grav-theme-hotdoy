(function ($) {
	'use strict';

	var initMap = function(){
	   	var $el = $('.map');
	    $el.each(function (index) {
	        var lat = parseFloat($(this).data('lat'));
	        var lng = parseFloat($(this).data('lng'));
	        var zoom = parseInt($(this).data('zoom'));
	        var	locations = $(this).data('locations');
	        var	styles = $(this).data('snazzy');

	        var map = new google.maps.Map(this, {
				zoom: zoom,
				center: {lat: lat,lng: lng},
				styles: styles || undefined,
				zoomControl: true,
				panControl: true,
				streetViewControl: false,
				mapTypeControl: false,
				scrollwheel: true,
				mapTypeId: 'roadmap',
				draggable: true,
	        });

 			var marker, i;
 			locations = JSON.parse(locations);
	        for (i = 0; i < locations.length; i++) { 
	       			marker = new google.maps.Marker({
	       				title: locations[i][0],
						position: new google.maps.LatLng(locations[i][1], locations[i][2]),
				});
				marker.setMap(map);
	        }
	    });
	}

	var init = function () {
		initMap();
	};

	$(init);
	
})(jQuery);
