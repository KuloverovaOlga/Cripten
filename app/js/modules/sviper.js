import Swiper from 'swiper/bundle';

const swipper = () => {
    const swiperOne = new Swiper('.service__swiper', {
        slidesPerView: '1',
        grabCursor: true,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1170: {
                slidesPerView: '3',
                spaceBetween: 20,
            },
            700: {
                slidesPerView: '2',
                spaceBetween: 30,
            },
        },
    });

    const swiperTwo = new Swiper('.feedback__swiper', {
        slidesPerView: '1',
        spaceBetween: 30,
        grabCursor: true,
        updateOnWindowResize: true,
        watchSlidesProgress: true,
        loop: true,
        pagination: {
            el: '.feedback__swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            1170: {
                slidesPerView: '2.5',
                spaceBetween: 130,
            },
            700: {
                slidesPerView: '2',
                spaceBetween: 30,
            },
        },
    });
};

export default swipper;
