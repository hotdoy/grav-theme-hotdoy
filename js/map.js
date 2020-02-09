(function ($) {
	'use strict';

	var initMap = function(){
	   	var $el = $('.map');
	    $el.each(function (index) {
	        var zoom = parseInt($(this).data('zoom'));
	        var	markers = JSON.parse($(this).data('markers'));
	        var	styles = $(this).data('styles');
 			var marker, i;
 			var bounds = new google.maps.LatLngBounds();
	        var map = new google.maps.Map(this, {
				zoom: zoom,
				center: new google.maps.LatLng(markers[0][1], markers[0][2]),
				styles: styles || undefined,
				zoomControl: true,
				panControl: true,
				streetViewControl: false,
				mapTypeControl: false,
				scrollwheel: false,
				mapTypeId: 'roadmap',
				draggable: true,
	        });

	        for (i = 0; i < markers.length; i++) { 
	        	var title = markers[i][0];
	        	var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
	        	var url = markers[i][3];
	        	var icon = markers[i][4];
       			marker = new google.maps.Marker({
       				title: title,
					position: position,
					icon: icon,
					url: url,
				});
				google.maps.event.addListener(marker, 'click', function() {
					window.open(this.url, '_blank')
    				
				});
	       		bounds.extend(position);
				marker.setMap(map);
	        }
	        if (markers.length > 1) {
	        	map.fitBounds(bounds);
	        }
	    });
	}

	var init = function(){
		initMap();
	};

	$(init);
	
})(jQuery);
