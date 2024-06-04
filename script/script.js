const menu_hamburguer = document.querySelector('.cabecalho__menu-hamburguer')
const menuHamburguer__fundo = document.querySelector('.menu-hamburguer__fundo')
const lista__menu = document.querySelectorAll('.lista__menu')
const opcoes__item = document.querySelector('.opcoes__item')
const lista__menuDesktop = document.querySelector('.lista__menu--Desktop')

menu_hamburguer.addEventListener('click', menuHamburguer)
opcoes__item.addEventListener('click',menu_hamburguerDesktop)

function menuHamburguer(){
    if(menu_hamburguer.classList[2] === 'ativa--background-menu'){
        menu_hamburguer.classList.remove('ativa--background-menu')
        
        menuHamburguer__fundo.classList.remove('ativa--menu-hamburguer__fundo')

        lista__menu[0].classList.remove('ativa-lista__menu')
        
   }else{
        menuHamburguer__fundo.classList.add('ativa--menu-hamburguer__fundo')
        menu_hamburguer.classList.add('ativa--background-menu')
        lista__menu[0].classList.add('ativa-lista__menu')
   }
}

function menu_hamburguerDesktop(){
   if(lista__menu[1].classList[1] === 'ativa-lista__menu--desktop-tablet' ){
    lista__menu[1].classList.remove('ativa-lista__menu--desktop-tablet')
    opcoes__item.classList.remove('ativa-opcoes__item')
   }
   else{
    opcoes__item.classList.add('ativa-opcoes__item')
    lista__menu[1].classList.add('ativa-lista__menu--desktop-tablet')
   }
}