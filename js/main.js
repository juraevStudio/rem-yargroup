setTimeout(function() {
    $(".load").addClass("active");
    setTimeout(function() {
        $(".load").addClass("open");
        setTimeout(function() {
            $(".load").addClass("opacity");
            setTimeout(function() {
                $(".load").addClass("none");
                $("body").removeClass("hidden");
            }, 500);
        }, 800);
    }, 1100);
}, 100);

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