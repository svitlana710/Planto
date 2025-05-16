
document.querySelectorAll('.nav-list a').forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const targetId = link.getAttribute('href');
        const target = document.querySelector(targetId);

        if(target){
            const targetRect = target.getBoundingClientRect();
            const targetPosition = targetRect.top + window.scrollY;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth',
            })
        }
    })
})

// show/hide background

const headerNav = document.querySelector('.nav');
const showBackground = document.querySelector('.show-eye');

showBackground.addEventListener('click', () => {
    headerNav.classList.toggle('nav-background');
    showBackground.classList.toggle('btn-bg');
})

// burger menu

const burgerMenuList = document.querySelector('.nav-list'); 
const burgerMenu = document.querySelector('.burger-menu'); 

burgerMenu.addEventListener('click', () => {
    burgerMenuList.classList.toggle('open');
    burgerMenuList.classList.toggle('nav-list');
})

// search/home pages

const homePage = document.querySelector('.nav-home');

homePage.addEventListener('click', () => {
    homePage.classList.toggle('nav-search');
    
})
