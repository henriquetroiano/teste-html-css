// setting actions to the menu button
const buttonMenu = document.querySelector('.menu_mobile_button');
const menu = document.querySelector('.top_menu')

buttonMenu.addEventListener('click', function(event) {
    event.preventDefault();
    buttonMenu.classList.toggle('active')
    menu.classList.toggle('mobile')
})

const menuItems = document.querySelectorAll('.top_menu a');

menuItems.forEach((a) => {
    a.addEventListener('click', function(event) {
        a.nextSibling.nextSibling.classList.toggle('active')
    })
})