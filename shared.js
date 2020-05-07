var OpenMenuButton = document.querySelector('.mobile-menu__button');
var CloseMenuButton = document.querySelector('.close-button');
var MobileMenu = document.querySelector('.mobile-menu');

OpenMenuButton.addEventListener('click', function() {
    MobileMenu.classList.add('open');
    OpenMenuButton.classList.add('close');
    CloseMenuButton.classList.add('open');
})

CloseMenuButton.addEventListener('click', function() {
    MobileMenu.classList.remove('open');
    OpenMenuButton.classList.remove('close');
    CloseMenuButton.classList.remove('open');
})

