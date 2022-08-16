'use strict'

window.addEventListener('DOMContentLoaded', ()=> {

    let subMenu = Array.from(document.querySelectorAll('.menu_sub'))
    

    subMenu.forEach((item)=>{

        let link = item.closest('.menu__item').querySelector('.menu__link')

        link.addEventListener('click', (e)=>{
            e.preventDefault()

            let nextMenu = link.nextElementSibling

            if  (nextMenu && !nextMenu.classList.contains('menu_active')) {
                hideMenu()
                nextMenu.classList.add('menu_active')
                return false
            }else {
                hideMenu()
                nextMenu.classList.remove('menu_active')
                return false
            };
        });
    });

    function hideMenu() {
        let subMenu = Array.from(document.querySelectorAll('.menu_sub'))

        subMenu.forEach((item)=>{
            if(item && item.classList.contains('menu_active')) {
                item.classList.remove('menu_active')
            };
        });
    }; 
});


