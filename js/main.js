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
        window.scrollTo(0, 0);
        navOffset = $navbar.offset().top;
        if ($(this).width() >= 1024) {
            $navbar.css('display', 'flex');
        } else {
            $navbar.css('display', 'none');
        }
    });

    $menu.on('click', function(e) {
        e.stopPropagation();
        $navbar.css('display', 'flex');
    });

    $('.navigationBar_navLink').on('click', function(e) {
        e.stopPropagation();
        var width = $(window).width();
        var smallRes = width <= 1007;

        if (smallRes) {
            $navbar.css('display', 'none');
        }

        var section = $(this).find('a').attr('href');
        console.log(section);
        if (section == '#about' || section == '#packages' || section == '#contact') {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(section).offset().top
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