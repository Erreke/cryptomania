export function playVideo(videoId, videoStep, userStep, dispatch) {
    return new Promise((resolve) => {
        if (window) {
            require('@/vendors/jwplayer-7.12.2/jwplayer.js');

            window.jwplayer.key = 'mY6Tdq0W6NPGldJ/sq+yBDyjyReOMgrwm3ftwg==';
            window.jwplayer(`player-${videoId}`).setup({
                file: `https://www.youtube.com/watch?v=${videoId}`,
                autostart: true,
                width: '100%',
                height: '420px'
            });

            window.jwplayer().on('complete', () => {
                if (userStep < videoStep) {
                    window.jwplayer().addButton(
                        null,
                        'ОК. Продолжить...',
                        () => {
                            dispatch('COMPLETE_CURRENT_STEP')
                        },
                        'download'
                    )
                }
            })
        }

        resolve()
    })
}

export function stopVideo() {
    return new Promise((resolve) => {
        if (window && window.jwplayer) {
            if (window.jwplayer().id) window.jwplayer().remove();
        }
        resolve()
    })
}
