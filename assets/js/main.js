visualSwiper = new Swiper(".sc-visual .swiper", {
    effect: "fade",
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    speed: 2000,
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".sc-visual .btn-next",
        prevEl: ".sc-visual .btn-prev"
    },
    allowTouchMove: false,
});

offerSwiper = new Swiper(".sc-offers .swiper", {
    speed: 2000,
    slidesPerView: 2.5,
    spaceBetween: 34,
    navigation: {
        nextEl: ".sc-offers .btn-next",
        prevEl: ".sc-offers .btn-prev"
    },
});

let paginationList = ["SUPERIOR TWIN", "SUPERIOR DOUBLE", "DELUXE TWIN", "DELUXE TRIPLE", "CORNER SUITE", "MAYPLACESUITE"]
let prevButton = $('.sc-rooms .btn-prev');
let nextButton = $('.sc-rooms .btn-next');
let prevButtonText = prevButton.find('> .text');
let nextButtonText = nextButton.find('> .text');

roomsSwiper = new Swiper(".sc-rooms .swiper", {
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false
    // },
    speed: 2000,
    loop: true,
    slidesPerView: 1,
    pagination: {
        el: ".sc-rooms .swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + paginationList[index] + "</span>";
        },
    },
    navigation: {
        nextEl: ".sc-rooms .btn-next",
        prevEl: ".sc-rooms .btn-prev"
    },
    on: {
        init: function (e) {
            prevButtonText.text(paginationList[this.slides.length - 1])
            nextButtonText.text(paginationList[e.realIndex + 1])
        },
        slideChange: function (e) {
            if (this.slides.length - 1 == this.realIndex) {
                prevButtonText.text(paginationList[e.realIndex - 1])
                nextButtonText.text(paginationList[0])
            } else if (this.realIndex == 0) {
                prevButtonText.text(paginationList[this.slides.length - 1])
                nextButtonText.text(paginationList[e.realIndex + 1])
            } else {
                prevButtonText.text(paginationList[e.realIndex - 1])
                nextButtonText.text(paginationList[e.realIndex + 1])
            }
        },
    },
    allowTouchMove: false,
});

dinigSwiper = new Swiper(".sc-dining .swiper", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    effect: "fade",
    spaceBetween: 20,
    speed: 2000,
    loop: true,
    slidesPerView: 1,
    navigation: {
        nextEl: ".sc-dining .btn-next",
        prevEl: ".sc-dining .btn-prev"
    }
});

// spotSwiper = new Swiper(".sc-spot .swiper", {
//     autoplay: {
//         delay: 500,
//         disableOnInteraction: false
//     },
//     speed: 10000,
//     loopAdditionalSlides: 1,
//     slidesPerView: 'auto',
//     spaceBetween: 35,
// });

$('.header .btn-side').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('on');
    $('.header').toggleClass('on');
    $('.header .content').toggleClass('on');
    $('.header .gnb').slideToggle();
})

let lastScroll = 0;

$(window).scroll(function () {
    curr = $(this).scrollTop();

    $('.header .btn-side').removeClass('on')
    $('.header').removeClass('on');
    $('.header .content').removeClass('on');
    $('.header .gnb').slideUp();

    if (curr > lastScroll) {
        $('.header .content').addClass('current')
    } else {
        $('.header .content').removeClass('current')
    }

    curr = lastScroll
})


$('.sc-visual .close-btn').click(function () {
    $('.sc-visual .advertise').addClass('none')
})

$('.footer .familybtn > a').click(function (e) {
    e.preventDefault();
    $('.footer .familybtn ul').slideToggle();
})

ScrollTrigger.create({
    trigger: '.container',
    start: "0% 0%",
    end: "100% 100%",
    toggleClass: { targets: '.reserve-link', className: 'block' }
})

ScrollTrigger.create({
    trigger: '.sc-notice',
    start: "0% 100%",
    end: "100% 0%",
    toggleClass: { targets: '.reserve-link', className: 'no-fix' }
})