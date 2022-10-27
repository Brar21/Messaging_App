
const openMenu = document.querySelector("#show-menu");
const hideMenu = document.querySelector("#hide-menu");
const sideMenu = document.querySelector("#nav-menu");
openMenu.addEventListener('click', function () {
    sideMenu.classList.add('active')
})
hideMenu.addEventListener('click', function () {
    sideMenu.classList.remove('active');
})