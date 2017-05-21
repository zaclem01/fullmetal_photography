$(document).ready(function() {
    var $topbar = $('.topbar');
    var $menu = $('.topbar_menuIcon');
    var $navbar = $('.navigationBar');
    
    var navOffset = $navbar.offset().top;
    var topbarHeight = $topbar.outerHeight();

    $(window).on('scroll', function(e) {
        if ($(this).scrollTop() > navOffset) {
            $navbar.toggleClass('navigationBar--fixed', true);
        } else {
            $navbar.toggleClass('navigationBar--fixed', false);
        }
    });

    $(window).on('resize', function() {
        $navbar.toggleClass('navigationBar--fixed', false);
        navOffset = $navbar.offset().top;
        if ($(this).width() >= 1024) {
            $navbar.css('display', 'flex');
        } else {
            $navbar.css('display', 'none');
        }
        $(window).scroll();
    });

    $menu.on('click', function(e) {
        e.stopPropagation();
        $navbar.css('display', 'flex');
    });

    $('.navigationBar_navLink').on('click', function(e) {
        e.stopPropagation();
        var width = $(window).width();
        var smallRes = width <= 1007;
        var section = $(this).find('a').attr('href');

        if (smallRes && !$(this).hasClass('js-keepOpen')) {
            $navbar.css('display', 'none');
        }
        if (section == '#about' || section == '#contact') {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(section).offset().top - 160
            });
        }
    });

    $('body').on('click', function(e) {
        var width = $(window).width();
        var smallRes = width <= 1007;

        if (smallRes) {
            $navbar.css('display', 'none');
        }
    });

    $('.ctaBtn--about').on('click', function() {
        $('#Setmore_button_iframe').click();
    });

    setTimeout(function() {
        $('.banner_overlay').removeClass('fadeInLeft');
        $('.banner_overlay').addClass('fadeOutRight');
    }, 2000)
});