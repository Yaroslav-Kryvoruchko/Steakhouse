let QuantityItem1Menu = document.getElementById("quantity");
var AddButton = document.querySelector(".add")
var SubTractButton = document.querySelector(".subtract")

AddButton.addEventListener('click', function() {
    let addone = QuantityItem1Menu + "4";
    outputResult(addone);
})

function outputResult(text) {
    QuantityItem1Menu.textContent = text;
  }

