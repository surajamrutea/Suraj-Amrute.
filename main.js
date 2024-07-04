/*Show menu bar*/ 
const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId);
    const nav=document.getElementById(navId);
    if(toggle && nav){
        toggle.addEventListener("click",()=>{
            nav.classList.toggle("show");
        })

    }
}
showMenu("nav_toggle","nav_menu");
/*Remove Menu Bar*/
const navLink=document.querySelectorAll(".nav_link");

function linkAction(){
    const navMenu = document.getElementById('nav_menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n=>n.addEventListener("click",linkAction));

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home_data, .about_image, .skills_subtitle, .skills_text',{}); 
sr.reveal('.home_image, .about_subtitle, .about_text, .skills_image',{delay: 300}); 
sr.reveal('.home_social_icon',{ interval: 200}); 
sr.reveal('.skills_data, .work_image, .contact_input,.contact_data',{interval: 200}); 



