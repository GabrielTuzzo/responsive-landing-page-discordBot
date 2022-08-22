const menuList = document.querySelector('#ul-list')
const menuDrop = document.querySelector('#dropMenu')

menuDrop.addEventListener('click', () => {
    menuList.classList.toggle("active")
    menuDrop.classList.toggle("menu-active")
})