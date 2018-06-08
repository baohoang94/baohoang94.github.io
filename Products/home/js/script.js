$(document).ready(function() {
	// show / hide button back to top
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 10) {
            $('.backtotop').show();
        } else {
            $('.backtotop').hide();
        }
    });
    // function back to top
    $('.backtotop').click(function(event) {
        $('html').animate({ scrollTop: 0 }, 1111);
    });
});