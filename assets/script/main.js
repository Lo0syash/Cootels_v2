$(document).ready(function(){

    //ANCHOR SCROLL
    //ANCHOR SCROLL

    $('.anchor').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 300);
    });

    //ANCHOR OPACITY
    //ANCHOR OPACITY

    $(window).on('scroll', function(){
        let anchor = $('.anchor');
        let header = $('.header').offset().top;

        console.log($(this).scrollTop());

        if($(this).scrollTop() >= header){
            anchor.addClass('active');
        }
        else{
            anchor.removeClass('active');
        }
    })
})

