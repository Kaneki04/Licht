var write = ['Programming.', 'Music.', 'My Thoughts.', 'Parkour.', 'Languages.', 'Learning.'];
var hobbies = ['Programming', 'Music', 'Dancing', 'Doing Parkour', 'Learning languages', 'Writing'];
$(document).ready(function(){
$(window).scroll(function(){
    if(this.scrollY>20){
        $('.navbar').addClass('sticky');
    }else{
        $('.navbar').removeClass('sticky');
        }
    if (this.scrollY > 500){
        $('.to-top').addClass('show');
    }
    else {
        $('.to-top').removeClass('show');
        
    }
     
    })
    // typing
    var typed = new Typed('.type', {
        strings:write,
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed2 = new Typed('.type2', {
        strings:hobbies,
        typeSpeed:110,
        backSpeed:60,
        loop:true
    });
    // go Up
    $('.to-top').click(function(){
        $('html').animate({scrollTop:0});
    });
    // toggle menu/nav
    $('.menu-btn').click(
        function(){
            $('.navbar .menu').toggleClass('active');
            $('.menu-btn i').toggleClass('active');

        }
    )
});