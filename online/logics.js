const QuantityItemMenu = document.getElementById("quantity");
const Amount = document.getElementById("amount");
var AddButton = document.querySelector(".add");
var SubTractButton = document.querySelector(".subtract");

let addst = 0;

function add() {
    if (addst <= 99){
        const adds = addst + 1;
        addst++;
        outputResult(adds);
        console.log(adds);
    } 
}

function subtract() {
    if(addst <= 99) {
        const subtracts = addst - 1;
        addst--;
        outputResult(subtracts);
        console.log(subtracts);
    } else if (subtracts <= 0) {
        return;
    }
}

function amount() {
    if (add) {
        const amountAdd = addst;
        outputResultAmount(amountAdd);
        console.log(amountAdd);
    } else if (subtract) {
        const amountSubtract = addst - 1;
        outputResultAmount(amountSubtract);
        console.log(amountSubtract);
    }
}

AddButton.addEventListener('click', add);
SubTractButton.addEventListener('click', subtract);
AddButton.addEventListener('click', amount);

function outputResult(result) {
    QuantityItemMenu.textContent = result;
}

function outputResultAmount(amount) {
    Amount.textContent = amount;
}






