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
var AmountButton = document.querySelector(".add__button");
var AmountItemCenter = document.querySelector(".item__one");
var AddMinus = document.querySelector(".plas__minus");
var ItemOne = document.querySelector(".item__one");
var AddSubtractButtons = document.querySelector(".amount-add__subtract");
var Mains = document.querySelector(".center__section-mains");
var MainsButton = document.querySelector(".menu_two");
var Starters = document.querySelector(".center__section-starters");
var StartersButton = document.querySelector(".menu_one");

LunchMenu.addEventListener('mouseover', function() {
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

AmountButton.addEventListener('click', function() {
    BlackDrop.classList.remove('open');
    Item1.classList.remove("open");
    Item2.classList.remove("open");
    Item3.classList.remove("open");
    Item4.classList.remove("open");
    Item5.classList.remove("open");
    AmountItemCenter.classList.add("open");
})

ItemOne.addEventListener("mouseover", function() {
    AddSubtractButtons.style.transform = ("translateX(400%)");
    AddMinus.style.opacity = ("1")
})

ItemOne.addEventListener("mouseout", function() {
    AddSubtractButtons.style.transform = ("translateX(420%)");
    AddMinus.style.opacity = ("0")
})

MainsButton.addEventListener('click', function() {
    Starters.style.display = "none";
    StartersButton.style.border = "none";
    Mains.classList.add("open");
    MainsButton.style.borderLeft = "5px solid white";
})

StartersButton.addEventListener('click', function() {
    Starters.style.display = "flex";
    StartersButton.style.borderLeft = "5px solid white";
    Mains.classList.remove("open");
    MainsButton.style.borderLeft = "none";
})
