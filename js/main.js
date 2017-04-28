$(document).ready(function() {
    var $topbar = $('.topbar');
    var $navbar = $('.navigationBar');
    
    var navOffset = $navbar.offset().top;

    $(window).on('scroll', function(e) {
        if ($(this).scrollTop() > navOffset) {
            $navbar.toggleClass('navigationBar--fixed', true);
            // $topbar.toggleClass('u-hidden', true);
        } else {
            $navbar.toggleClass('navigationBar--fixed', false);
            // $topbar.toggleClass('u-hidden', false);
        }
    });
});