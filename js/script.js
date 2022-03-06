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
    const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop-55,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu ul li a[href*=' + sectionId + '] i').classList.add('active-link')
        }else{
            document.querySelector('.menu ul li a[href*=' + sectionId + '] i').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
const sr =ScrollReveal({
    origin:'top',
    distance:'50px',
    duration:1000,
    delay:400
})
sr.reveal('.home-content')

});
