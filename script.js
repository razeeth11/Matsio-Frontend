var hamburger_menu = document.querySelector('.hamburger')
var hamburger_menu_list = document.querySelector('.hamburger-menu-list')
var close = document.querySelector('.close')

hamburger_menu.addEventListener('click' , ()=>{
   hamburger_menu_list.style.display = 'block'
   hamburger_menu.style.display = 'none'
})

close.addEventListener('click' , ()=>{
  hamburger_menu_list.style.display = 'none'
  hamburger_menu.style.display = 'block'
})