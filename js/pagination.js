(function ($) {
	'use strict';

	var ctnSel = '[data-paginate]';
	var sentinelSel = '[data-pagination]';
	var	loaderSel = '.pagination__loader';
	var config = {rootMargin: '0px', threshold: 0};

	var paginationObserver = function(){
		var sentinel = document.querySelectorAll(sentinelSel);
		let observer = new IntersectionObserver(onIntersection, config);

		sentinel.forEach(s => {
		  observer.observe(s);
		});

		function onIntersection(sentinel) {
			sentinel.forEach(s => {
				if (s.intersectionRatio > 0) {
					observer.unobserve(s.target);
					paginate();
				}
			});
		}
	}

	var paginate = function(){
		var ctn = $(ctnSel);
		var	sentinel = $(sentinelSel);
		var infinite = sentinel.data('pagination') == 'infinite';
		var loadMore = sentinel.data('pagination') == 'loadMore';
		var	url = $(sentinel).find('a').attr('href');

		if (url && infinite) {
			sentinel.remove();
			ajaxLoad(url, ctn, sentinel);
		}

		if (url && loadMore) {
			sentinel.find('a').on('click touch', function(event){
				event.preventDefault();
				event.stopPropagation()
		    	ajaxLoad(url, ctn, sentinel);
			});
		}
	}

	var ajaxLoad = function(url, ctn, sentinel){
		var	loader = $(loaderSel);
		$.ajax({
			url: url,
			dataType: 'html',
			success: function(data) {
				sentinel.remove();
				var items = $(data).find(ctnSel).html();
				loader.remove();
				$(ctn).append(items);
				$(data).remove();
				paginationObserver();
			}
		});
	}

	var init = function () {
		paginationObserver();
	};

	$(init);
	
})(jQuery);
