$(function () {
    $('.design-slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img class="arrow-left arrow" src="images/arrow-left.svg" alt="">',
        nextArrow: '<img class="arrow-right arrow" src="images/arrow-right.svg" alt="">',
        responsive: [
            {
                brakepoint: 361,
                settings: {
                    variableWidth: false,
                    slidesToShow: 1
                }
            }
        ]
    });
});