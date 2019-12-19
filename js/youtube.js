function onYouTubeIframeAPIReady() {
	$('.youtube-player').each(function(){
		var player = new YT.Player(this.id, {
		 	videoId: this.dataset.videoid
		});
	})
};
