const progressBar = () => {
    const progressBar = document.querySelectorAll('.map__content-progress');
    const span = document.querySelectorAll('.map__content-progress span');
    const contentList = document.querySelector('.map__content-list');
    const contentItem = document.querySelectorAll('.map__content-item');

    const getLineHight = () => {
        contentItem.forEach((item) => {
            let line = item.querySelector('.map__content-progress>span');
            line.style.height = `${item.offsetHeight + 30}px`;
        });
    }
    getLineHight()

    window.addEventListener('resize', function () {
        getLineHight()
    });

    progressBar.forEach((item, i) => {
        item.dataset.num = i + 1;
    });

    contentList.addEventListener('click', (e) => {
        let target = e.target;
        if (target.classList.contains('map__content-progress')) {
            let id = target.getAttribute('data-num');

            for (let i = 1; i < progressBar.length; i++) {
                if (i < id) {
                    progressBar[i].classList.add('active');
                    span[i - 1].classList.add('active__span');
                } else {
                    progressBar[i].classList.remove('active');
                    span[i - 1].classList.remove('active__span');
                }
            }
        }
    });
};

export default progressBar;
