const burger = document.querySelector('.hamburger-menu')
const menuElem = document.querySelector('.menu')

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active')
    burger.classList.toggle('hamburger-menu-active')

}

burger.addEventListener('click', () => toggleMenu())


// humburger-menu
// memu