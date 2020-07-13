// setting actions to the menu button
const body = document.body;
const buttonMenu = document.querySelector('.menu_mobile_button');
const menu = document.querySelector('.top_menu')
const anchors = document.querySelectorAll('.top_menu a');
const submenu1 = document.querySelector('.submenu1');
const submenu2 = document.querySelector('.submenu2');

buttonMenu.addEventListener('click', function(event) {
    event.preventDefault();
    buttonMenu.classList.toggle('active')
    menu.classList.toggle('mobile')

    if(buttonMenu.classList.contains('active')) {
        submenu1.classList.remove('active');
        submenu2.classList.remove('active');

    }
})

// at clicking on any place, the menu will disappear
body.addEventListener('click', function(event) {
    // console.log(event)
    if(event.target.outerHTML.startsWith('<span')) {
        // do nothing if you click on menu button
    } else  if(event.target.outerHTML.startsWith('<a')) {
        //do nothing if you click on a "a" (anchor, menu item)
        event.target.nextSibling.nextSibling.classList.toggle('active')
    } else {
        buttonMenu.classList.remove('active')
        menu.classList.remove('mobile')

    }
})