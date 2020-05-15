let ytPlayers = document.querySelectorAll('.youtube-player');

if (ytPlayers) {
	let tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

function onYouTubeIframeAPIReady() {
	ytPlayers.forEach(ytPlayer =>{
		var player = new YT.Player(ytPlayer.id, {
		 	videoId: ytPlayer.dataset.videoid
		});
	})
};
