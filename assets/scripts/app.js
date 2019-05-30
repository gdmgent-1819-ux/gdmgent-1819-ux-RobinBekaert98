const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // toggle nav
    burger.addEventListener('click', function(){
        nav.classList.toggle('nav-active');
    });

    // animate links
    navLinks.forEach(link => {
        link.style.animation = `navLinkFade .5s ease forwards`;
    })
};

navSlide();