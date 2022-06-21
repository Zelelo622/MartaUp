$(function () {
    $('.header__slider').slick({
        vertical: true,
        arrows: false,
        dots: true,
        autoplay: true,
        dotsClass: 'header-dots',
    });

    $('.nav__burger').on('click', function () {
        $('.nav__list').slideToggle();
    });
})
