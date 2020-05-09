var LunchMenu = document.querySelector(".button__down");
var DownLunch = document.querySelector(".lunch-menu__items__down");
var Arrow = document.querySelector(".arrow");
var BlackDrop = document.querySelector(".backdrop");
var ItemButton1 = document.querySelector(".item-1");
var ItemButton2 = document.querySelector(".item-2");
var ItemButton3 = document.querySelector(".item-3");
var ItemButton4 = document.querySelector(".item-4");
var ItemButton5 = document.querySelector(".item-5");
var Item1 = document.querySelector(".item1__menu");
var Item2 = document.querySelector(".item2__menu");
var Item3 = document.querySelector(".item3__menu");
var Item4 = document.querySelector(".item4__menu");
var Item5 = document.querySelector(".item5__menu");
var AddButton = document.querySelector(".add__button");

LunchMenu.addEventListener('click', function() {
    DownLunch.classList.add("lunch-menu__down");
    Arrow.style.transform = "rotate(180deg)";
})

ItemButton1.addEventListener('click', function(){
    Item1.classList.add("open");
    BlackDrop.classList.add("open");
})

ItemButton2.addEventListener('click', function(){
    Item2.classList.add("open");
    BlackDrop.classList.add("open");
})

ItemButton3.addEventListener('click', function(){
    Item3.classList.add("open");
    BlackDrop.classList.add("open");
})

ItemButton4.addEventListener('click', function(){
    Item4.classList.add("open");
    BlackDrop.classList.add("open");
})

ItemButton5.addEventListener('click', function(){
    Item5.classList.add("open");
    BlackDrop.classList.add("open");
})

BlackDrop.addEventListener('click', function() {
    BlackDrop.classList.remove('open');
    Item1.classList.remove("open");
    Item2.classList.remove("open");
    Item3.classList.remove("open");
    Item4.classList.remove("open");
    Item5.classList.remove("open");
})

AddButton.addEventListener('click', function() {
    BlackDrop.classList.remove('open');
    Item1.classList.remove("open");
    Item2.classList.remove("open");
    Item3.classList.remove("open");
    Item4.classList.remove("open");
    Item5.classList.remove("open");
})
