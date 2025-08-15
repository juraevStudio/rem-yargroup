// Lenis
const lenis = new Lenis({
    wrapper: document.querySelector('.scroll-container'),
    lerp: 0.1,
    duration: 1.2,
    smoothTouch: true
});
lenis.on('scroll', e => {
    console.log(e);
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
// Animate on Scroll
const animatedElements = document.querySelectorAll('.animate-on-scroll');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('is-visible');
        }
    });
});
animatedElements.forEach(el => observer.observe(el));

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