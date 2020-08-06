$(function() {

    $('.slider__inner').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        autoplay: 3000
    });

    $('.feedback__slider-inner').slick({
        nextArrow: '<button type="button" class="feedback__slick-btn feedback__slick-next"><svg width="35" height="8" viewBox="0 0 35 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M34.3536 4.35355C34.5488 4.15829 34.5488 3.84171 34.3536 3.64645L31.1716 0.464466C30.9763 0.269204 30.6597 0.269204 30.4645 0.464466C30.2692 0.659728 30.2692 0.976311 30.4645 1.17157L33.2929 4L30.4645 6.82843C30.2692 7.02369 30.2692 7.34027 30.4645 7.53553C30.6597 7.7308 30.9763 7.7308 31.1716 7.53553L34.3536 4.35355ZM0 4.5H34V3.5H0V4.5Z"/></svg></button>',

        prevArrow: '<button type="button" class="feedback__slick-btn feedback__slick-prev"><svg width="35" height="8" viewBox="0 0 35 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.646446 4.35355C0.451183 4.15829 0.451183 3.84171 0.646446 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646446 4.35355ZM35 4.5H1V3.5H35V4.5Z"/></svg></button>',
        dots: false,
        infinite: false,
        speed: 500,
        arrows: true,
        autoplay: 3000
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider__nav'
    });

    $('.slider__nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });

    $('.stages__slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.stages__slider-nav'
    });

    $('.stages__slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: 9000,       
        asNavFor: '.stages__slider-for',
        dots: false,
        arrows: false,  
        centerMode: true,
        focusOnSelect: true
    });


    $('.catalog__top-option, .catalog__top-select').styler();

    $('.burger').click(function(event){
         $('.burger, .header__list').toggleClass('burger-active');
         $('body').toggleClass('lock');
    });



});