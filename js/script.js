var write = ['Programming.', 'Music.', 'My Thoughts.', 'Parkour.', 'Languages.', 'Learning.'];
var hobbies = ['Programming', 'Music', 'Dancing', 'Doing Parkour', 'Learning languages', 'Writing'];
$(document).ready(function(){
$(window).scroll(function(){
    if(this.scrollY>20){
        $('.nav').addClass('sticky');
    }else{
        $('.nav').removeClass('sticky');
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
});
