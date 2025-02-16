// Hambuger Menu
const hamburger = document.querySelector('#hamburger');
const nav_menu = document.querySelector('#nav-menu')
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    nav_menu.classList.toggle('hidden')
});

// Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    } else{
        header.classList.remove('navbar-fixed');
    }
}