$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('nav.navbar').addClass('scrolled');
    } else {
        $('nav.navbar').removeClass('scrolled');
    }
});
$(document).ready(function() {
    $("a[href^='#']").on('click', function(e) {
        e.preventDefault();
        const target = this.hash;
        const $target = $(target);
        $('html, body').animate({
            scrollTop: $target.offset().top - 70
        }, 800, 'swing');
    });
});

$('form').on('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    $(this)[0].reset();
})
const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});
window.FontAwesomeConfig = { autoReplaceSvg: false };