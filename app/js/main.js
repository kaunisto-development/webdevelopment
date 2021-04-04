$(document).ready(function(){
    $('.works-button[filter]').click(function(){
        if($(this).attr('filter')=='all') {
            if($(this).attr('val')=='off') {
                $('.works-button[filter]').attr('val', 'off');
                $(this).attr('val', 'on');
                $('.works-button[filter]').removeClass('focused')
                $(this).addClass('focused');
                $('.works__item').show(300);
            }
        }else
        if($(this).attr('val')=='off'){
            $('.works-button[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.works-button[filter]').removeClass('focused')
            $(this).addClass('focused');
            $('.works__item').hide(300);
            var filter = $(this).attr('filter');
            $('.works__item[filter='+filter+']').show(300);
        }
    })
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:true,
        arrows:false,
        dotsClass:'dots-style'
      });

    
});