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

    $('.navigationBar_navLink, body').on('click', function() {
        var width = $(window).width();
        var smallRes = width <= 1007;

        if (smallRes) {
            $navbar.css('display', 'none');
        }
    });
});