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

//burger
//burger

const header__nav = document.querySelector('.header__nav-list');
const header__btn = document.querySelector('.header__btn-box');

const nav_link = document.querySelector('.header__nav-link').addEventListener('click', ()=>{
    header__nav.classList.remove('active')
    header__btn.classList.remove('active')
})

const burger = document.querySelector('.burger').addEventListener('click', ()=>{
    header__nav.classList.toggle('active')
    header__btn.classList.toggle('active')
})
