$('.ancla').click(function(){
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 2000);
        return false;
});

