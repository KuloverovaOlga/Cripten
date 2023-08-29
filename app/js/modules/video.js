const video = () => {
    const videoWrapper = document.querySelector('.about__video-wrapper');
    const video = document.querySelector('.about__video-wrapper video');
    const img = document.querySelector('.about__video-image-img');
    const btn = document.querySelector('.about__video-button-img');

    const vipeoPlay = () => {
        video.style.display = 'block';
        img.style.display = 'none';
        btn.style.display = 'none';
        video.play();
    };

    const vipeoPause = () => {
        video.style.display = '';
        img.style.display = '';
        btn.style.display = '';
        video.pause();
    };

    videoWrapper.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('about__video-image-img') || target.classList.contains('about__video-button-img')) {
            vipeoPlay();
            console.log(target)
        }
    })

    video.addEventListener('seeking', () => {
        vipeoPlay();
    });

    video.addEventListener('pause', () => {
        vipeoPause();
    });
};

export default video;
