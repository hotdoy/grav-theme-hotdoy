(function ($) {
	'use strict';

	var initMap = function(){
	   	var $el = $('.map');
	    $el.each(function (index) {
	        var zoom = parseInt($(this).data('zoom'));
	        var	locations = JSON.parse($(this).data('locations'));
	        var	styles = $(this).data('styles');
	        var icon = $(this).data('icon');
 			var marker, i;
 			var bounds = new google.maps.LatLngBounds();
	        var map = new google.maps.Map(this, {
				zoom: zoom,
				center: new google.maps.LatLng(locations[0][1], locations[0][2]),
				styles: styles || undefined,
				zoomControl: true,
				panControl: true,
				streetViewControl: false,
				mapTypeControl: false,
				scrollwheel: false,
				mapTypeId: 'roadmap',
				draggable: true,
	        });

	        for (i = 0; i < locations.length; i++) { 
	        	var title = locations[i][0];
	        	var position = new google.maps.LatLng(locations[i][1], locations[i][2])
       			marker = new google.maps.Marker({
       				title: title,
					position: position,
					icon: icon,
				});
	       		bounds.extend(position);
				marker.setMap(map);
	        }
	        if (locations.length > 1) {
	        	map.fitBounds(bounds);
	        }
	    });
	}

	var init = function () {
		initMap();
	};

	$(init);
	
})(jQuery);
