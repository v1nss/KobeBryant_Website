let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('nav ul a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('nav ul a[href*= ' + id + ']').classList.add('active');
            });
        };
    });
};

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

ScrollReveal().reveal(".card", {delay: 200, easing: "ease-out", interval: 200, scale: 1.2, reset: true});
ScrollReveal().reveal(".scrolling_text", {delay: 300, easing: "ease-out", reset: true});
ScrollReveal().reveal(".profile-box", {reset: true, delay: 200, easing: "ease-out"});