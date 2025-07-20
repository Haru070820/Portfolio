$(window).on('scroll', function(){
    const scrollTop = $(this).scrollTop();
    const heroHeight = $('#hero').outerHeight();
    if (scrollTop < heroHeight){
        $('nav').css({
            'opacity': '1',
            'pointer-events': 'auto'
        });
    } else{
        $('nav').css({
            'opacity': '0',
            'pointer-events': 'none'
        });
    }
});