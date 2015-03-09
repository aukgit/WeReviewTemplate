/* ==========
   YOUTUBE BEGINS
   ========== */
$(document).on('click', '.video-close', function (e) {
    e.preventDefault();
    revertVideo();
    $('.video-close').removeClass('show');
});

$("#dataTable tbody").on("click", "tr", function () {
    alert($(this).text());
});

if ($('html').hasClass('lt-ie9')) {
    initVideo(); // embed video on page load for ie8 and lower
}

var vidHTML = "";

function initVideoClick() {
    $(document).on('click', '.yt-player', function (e) {
        e.preventDefault();
        //if (vidHTML == ""){
        saveVideo();
        if (isYoutubeInit === false) { initVideo(); } else {
            onYouTubeIframeAPIReady();
        }
        //}

        if ($(window).width() >= 768) {
            $('.video-close').addClass('show');
        }

    });
}

initVideoClick();

// This code loads the IFrame Player API code.
function initVideo() {
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    isYoutubeInit = true;
    $(document).find('.yt-player').each(function () {
        var divId = $(this).attr('id');
        var width = $('#' + divId).parent().width();
        var height = Math.round(width * aspectRatio);
        var isAutoplay = ($('html').hasClass('lt-ie9')) ? 0 : 1;
        player = new YT.Player(divId, {
            height: height,
            width: width,
            videoId: divId,
            playerVars: { 'showinfo': 0, 'rel': 0, 'theme': 'dark', 'color': 'white', 'iv_load_policy': 3, 'autoplay': isAutoplay, 'wmode': 'transparent' },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    });
    $('.video').fitVids();
}

// The API will call this function when the video player is ready.
function onPlayerReady(event) {
    if ($('body').hasClass('videos')) {
        loadVideo();
    }
}

// The API calls this function when the player's state changes.
function onPlayerStateChange(event) {
    var vidId = getVideoId(event);
    if (event.data == YT.PlayerState.PLAYING) {
        console.log(eventCategory + '/click/Play:' + vidId);
        ga('send', 'event', eventCategory, 'click', 'Play:' + vidId);
        startYoutubeProgressInterval(event.target, vidId);
    }
    else if (event.data == YT.PlayerState.PAUSED) {
        console.log(eventCategory + '/click/Pause:' + vidId);
        ga('send', 'event', eventCategory, 'click', 'Pause:' + vidId);
    }
    else if (event.data == YT.PlayerState.ENDED) {
        console.log(eventCategory + '/click/Complete:' + vidId);
        ga('send', 'event', eventCategory, 'click', 'Complete:' + vidId);
        if (!$('body').hasClass('videos')) {
            revertVideo();
        }
    }
}

function stopVideo() {
    player.stopVideo();
}

function getVideoId(event) {
    var url = event.target.getVideoUrl();
    // "http://www.youtube.com/watch?v=gzDS-Kfd5XQ&feature=..."
    var match = url.match(/[?&]v=([^&]+)/);
    // ["?v=gzDS-Kfd5XQ", "gzDS-Kfd5XQ"]
    return match[1];
}

function revertVideo() {
    document.getElementById('videoContainer').innerHTML = vidHTML;
}

function saveVideo() {
    vidHTML = document.getElementById('videoContainer').innerHTML;
}

function loadVideo() {
    if (currentClickIndex != -1) {
        if (currentClickIndex != lastClickIndex) {
            player.loadVideoById(videoArray[currentClickIndex]);
            lastClickIndex = currentClickIndex;
        }
    }
}

function startYoutubeProgressInterval(youtube, videoId) {
    youtube.interval = setInterval(function () {
        youtubeProgressInterval(youtube, videoId);
    }, 1000);
}

function youtubeProgressInterval(youtube, videoId) {
    var progress = youtube.getCurrentTime() / youtube.getDuration() * 100;
    if (progress > 25 && progress <= 50) {
        if (youtube.progress !== 25) {
            console.log(eventCategory + '/click/25%:' + videoId);
            ga('send', 'event', eventCategory, 'click', '25%:' + videoId);
            youtube.progress = 25;
        }
    } else if (progress > 50 && progress <= 75) {
        if (youtube.progress !== 50) {
            console.log(eventCategory + '/click/50%:' + videoId);
            ga('send', 'event', eventCategory, 'click', '50%:' + videoId);
            youtube.progress = 50;
        }
    } else if (progress > 75) {
        if (youtube.progress !== 75) {
            console.log(eventCategory + '/click/75%:' + videoId);
            ga('send', 'event', eventCategory, 'click', '75%:' + videoId);
            youtube.progress = 75;
        }
    }
}
/* ==========
   YOUTUBE ENDS
   ========== */