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
    const toTop = document.querySelector('#to-top')

    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('block');
    } else{
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('block');
        toTop.classList.add('hidden');
    }
}

// Close hamburger menu without close button
// window.addEventListener('click', function(e){
//     if(e.target != hamburger && e.target != nav_menu){
//         hamburger.classList.remove('hamburger-active');
//         nav_menu.classList.add('hidden');
//     }
// });

// Dark Mode Toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function(){
    if(darkToggle.checked){
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }
    else{
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }

    // darkToggle.checked ? html.classList.add('dark') : html.classList.remove('dark')
});


// Pindahkan posisi toggle sesuai dark mode
if(localStorage.theme === 'dark' || (('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)){
    darkToggle.checked = true;
} else{
    darkToggle.checked = false;
}