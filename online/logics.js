const QuantityItemMenu = document.getElementById("quantity");
const Amount = document.getElementById("amount");
const AmountItem = document.getElementById("amount__item")
const Price = document.getElementById("price");
const Total = document.getElementById("total");
var AddButton = document.querySelector(".add");
var SubTractButton = document.querySelector(".subtract");
var AmountAdd = document.querySelector(".amount__add");
var AmountSubtract = document.querySelector(".amount__subtract");

let addst = 1;

function add() {
    if (addst <= 99){
        const adds = addst + 1;
        addst++;
        outputResult(adds);
    } 
}

function subtract() {
    if(addst <= 99) {
        const subtracts = addst - 1;
        addst--;
        outputResult(subtracts);
    } 
}

function amount() {
    const amounts = addst;
    const amountitem = addst;
    const prices = addst * 3;
    const totalmoney = prices; 
    if (prices == 0) {
        AmountItemCenter.classList.remove("open");
    }
    outputResultAmount(amounts, amountitem, prices, totalmoney);
}

function amountAdd() {
    add(); 
    amount();
}

function amountSubtract() {
    subtract();
    amount();
}

AddButton.addEventListener('click', add);
SubTractButton.addEventListener('click', subtract);
AmountButton.addEventListener('click', amount);
AmountAdd.addEventListener('click', amountAdd);
AmountSubtract.addEventListener('click', amountSubtract);

function outputResult(result) {
    QuantityItemMenu.textContent = result;
}

function outputResultAmount(amount, amountItem, price, total) {
    Amount.textContent = amount;
    AmountItem.textContent = amountItem;
    Price.textContent = price;
    Total.textContent = total;
}






