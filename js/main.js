window.addEventListener('load', function () {
    $(".load").addClass("active");
    setTimeout(function() {
        $(".load").addClass("open");
        setTimeout(function() {
            $(".load").addClass("opacity");
            setTimeout(function() {
                $(".load").addClass("none");
                $("body").removeClass("hidden");
            }, 500);
        }, 300);
    }, 1100);
});

// Header Fixed
$(window).on('scroll', function () {
    $(".header").toggleClass("fixed", $(this).scrollTop() > 50);
});

$('.header__navbar a').on('click', function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    if (target && $(target).length) {
        const offset = window.innerWidth < 1023 ? 80 : 100;
        const scrollTarget = $(target).offset().top - offset;
        $('html, body').animate({ scrollTop: scrollTarget }, 1000);
    }
});

$('.services__box').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            infinite: true,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true
        }
        },
    ]
});
$('.img_sldier').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: true,
    arrows: true,
    swipe: false,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            
        }
        },
    ]
});

$('.befaft__slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    arrows: true,
    draggable: false,
    swipe: false,
    responsive: [
        {
        breakpoint: 768,
        settings: {
            infinite: true,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true
        }
        },
    ]
});
// After Before
$(document).ready(function () {
    $(".beforeafter").twentytwenty({
        default_offset_pct: 0.5,
        orientation: 'horizontal',
        before_label: 'До',
        after_label: 'После',
        no_overlay: false,
        move_slider_on_hover: false,
        move_with_handle_only: true,
        click_to_move: false
    });
});

$('.galleryVideo__slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    responsive: [
        {
        breakpoint: 1199,
        settings: {
            slidesToShow: 3,
        }
        },
        {
        breakpoint: 768,
        settings: {
            infinite: true,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true
        }
        },
    ]
});

$('.reviews__slider').slick({
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    arrows: true,
    responsive: [
        {
        breakpoint: 767,
        settings: {
            infinite: true,
            slidesToShow: 1,
            centerMode: true,
            variableWidth: true
        }
        },
    ]
});
if (window.innerWidth > 768) {
    // header burgir
    $(".header__burgir").click(function() {
        const b = $(".header__burgir"), h = $(".header");
        if (b.hasClass("active")) {
            h.removeClass("open opacity");
            b.removeClass("rotate");
            setTimeout(() => b.removeClass("active"), 300);
        } else {
            b.addClass("active");
            h.addClass("open");
            setTimeout(() => b.addClass("rotate"), 300);
            setTimeout(() => h.addClass("opacity"), 1);
        }
    });
}
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});