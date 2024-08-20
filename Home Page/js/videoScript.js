let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('videoDiv', {
        videoId: 'zMmNpoSYrfY',
        playerVars: {
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            loop: 1,
            fs: 1,
            cc_load_policy: 0,
            iv_load_policy: 3,
            autohide: 1,
            mute: 1,
            playlist: 'zMmNpoSYrfY' 
        },
        events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    event.target.mute();
    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.ENDED) {
        player.playVideo();
    }
}