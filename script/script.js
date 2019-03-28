$(document).ready(function () {
    //Portfolio filter;
    $('.button[filter]').click(function () {
        if($(this).attr('filter')=='all') {
            if ($(this).attr('val')=='off') {
                $('.button[filter]').attr('val', 'off');
                $(this).attr('val', 'on');
                $('.button[filter]').removeClass('focused');
                $(this).addClass('focused');
                $('.filter > div').show(900);
            }
        } else if ($(this).attr('val')=='off') {
            $('.button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.button[filter]').removeClass('focused');
            $(this).addClass('focused');
            $('.filter > div').hide(900);
            var filterX = $(this).attr('filter');
            $('.filter > [filter='+filterX+']').show(900);
        }
    });
    //Scrolling WEB-page;
    $('a[href^="#"]').click(function () {
        //ниже сохраним значение атрибута href в перем-й;
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
        return false;
    });
});