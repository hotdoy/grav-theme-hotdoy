(function ($) {
	'use strict';

	let ctnSel = '[data-paginate]';
	let sentinelSel = '[data-pagination]';
	let	loaderSel = '.pagination__loader';
	let config = {rootMargin: '0px', threshold: 0};

	let paginationObserver = function(){
		let sentinel = document.querySelectorAll(sentinelSel);
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

	let paginate = function(){
		let ctn = $(ctnSel);
		let	sentinel = $(sentinelSel);
		let infinite = sentinel.data('pagination') == 'infinite';
		let loadMore = sentinel.data('pagination') == 'loadMore';
		let	url = $(sentinel).find('a').attr('href');

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

	let ajaxLoad = function(url, ctn, sentinel){
		let	loader = $(loaderSel);
		$.ajax({
			url: url,
			dataType: 'html',
			success: function(data) {
				sentinel.remove();
				let items = $(data).find(ctnSel).html();
				loader.remove();
				$(ctn).append(items);
				$(data).remove();
				paginationObserver();
			}
		});
	}

	let init = function () {
		paginationObserver();
	};

	$(init);
	
})(jQuery);
