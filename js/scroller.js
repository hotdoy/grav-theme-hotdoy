(function ($) {
	'use strict';

	var ctnSel = 'div[data-pagination-ctn]';
	var sentinelSel = 'div[data-pagination-sentinel]';
	var	loaderSel = '.loader';
	var config = {rootMargin: '200px', threshold: 0};

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
					pagination();
				}
			});
		}
	}

	var pagination = function(){
		var ctn = $(ctnSel);
		var	sentinel = $(sentinelSel);
		var infiniteScroll = sentinel.data('pagination-sentinel') == 'infiniteScroll';
		var loadMore = sentinel.data('pagination-sentinel') == 'loadMore';
		var	url = $(sentinel).find('a').attr('href');

		if (url && infiniteScroll) {
			sentinel.remove();
			ajaxLoadMore(url, ctn, sentinel);
		}

		if (url && loadMore) {
			sentinel.find('a').on('click touch', function(event){
				event.preventDefault();
				event.stopPropagation()
		    	ajaxLoadMore(url, ctn, sentinel);
			});
		}
	}

	var ajaxLoadMore = function(url, ctn, sentinel){
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
