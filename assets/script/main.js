$(document).ready(function(){
    $(window).on('scroll', function(){
        let offset = $('.header').offset().top;
        let anchor = $('.anchor').offset().top;

        if($(this).scrollTop() >= offset){
            anchor.addClass('active')
        }
        else{
            anchor.removeClass('active')
        }
    })
})