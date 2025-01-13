var $ = jQuery.noConflict();
$(document).ready(function () {
    const $slider = $('.offer-slider');

    $slider.slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        variableWidth: true,
        centerMode: false,
    });

    const $pagination = $('.hot-offers-slick-pagination');
    const slideCount = $slider.slick('getSlick').slideCount;

    for (let i = 0; i < slideCount; i++) {
        $pagination.append(`<button data-index="${i}"></button>`);
    }

    function updatePagination(currentSlide) {
        $pagination.find('button').removeClass('active');
        $pagination.find(`button[data-index="${currentSlide}"]`).addClass('active');
    }


    $slider.on('beforeChange', function () {
        // $('.slick-slide').removeClass('maxi-slide');
    });

    $slider.on('afterChange', function (event, slick, currentSlide) {
        if (currentSlide === 0) {

            $('.slick-slide').removeClass('maxi-slide');
            $('.slick-slide[data-slick-index="0"]').addClass('maxi-slide');
        } else {

            $('.slick-slide[data-slick-index="' + currentSlide + '"]').addClass('maxi-slide');
        }
        updatePagination(currentSlide);
    });

    // Клик по кнопке пагинации
    $pagination.on('click', 'button', function () {
        const index = $(this).data('index');
        $slider.slick('slickGoTo', index);
    });

    // Кнопки навигации
    $('.slick-arrow-prev').on('click', function () {
        $slider.slick('slickPrev');
    });

    $('.slick-arrow-next').on('click', function () {
        $slider.slick('slickNext');
    });


    $('.slick-slide').addClass('mini-slide');
    $('.slick-slide[data-slick-index="0"]').addClass('maxi-slide');
    updatePagination(0);
});
