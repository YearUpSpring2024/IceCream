"use strict";

// radiobuttons
const iceCreamConeRadio = document.getElementById("iceCreamConeRadio");
const iceCreamCupRadio = document.getElementById("iceCreamCupRadio");
// 
const toppingsRow = document.getElementById("toppingsRow");
const numberOfScoopsTextbox = document.getElementById("numberOfScoopsTextbox");
const submitOrderButton = document.getElementById("submitOrderButton");

// toppings
const sprinklesCheckbox = document.getElementById("sprinklesCheckbox");
const whippedCreamCheckbox = document.getElementById("whippedCreamCheckbox");
const hotFudgeCheckbox = document.getElementById("hotFudgeCheckbox");
const cherryCheckbox = document.getElementById("cherryCheckbox");

// spans
const outputTax = document.getElementById("outputTax");
const outputTotal = document.getElementById("outputTotal");
const outputBasePrice = document.getElementById("outputBasePrice");


window.onload = function () {
    iceCreamConeRadio.onclick = togglesToppingRowVisibility;
    iceCreamCupRadio.onclick = togglesToppingRowVisibility;
    submitOrderButton.onclick = onSubmitOrderButtonClicked;
}


function togglesToppingRowVisibility() {
    console.log("toggle");
    let shouldBeVisible = iceCreamCupRadio.checked;
    // console.log(shouldBeVisible);

    if (shouldBeVisible) {

        toppingsRow.style.visibility = "visible";
    } else {
        toppingsRow.style.visibility = "hidden";
    }

}

function onSubmitOrderButtonClicked() {
    // prices
    const pricePerScoop = 2.25;
    const moreScoopAdded = 1.25;
    const taxRate = 0.07;
    let numberOfScoops = parseFloat(numberOfScoopsTextbox.value)

    // staring at 0
    let toppingsPrice = 0;
    let scoopPrice = 0;
    let tax = 0;
    let totalPrice = 0;


    if (sprinklesCheckbox.checked) {
        toppingsPrice = toppingsPrice + 0.50;
    }
    if (whippedCreamCheckbox.checked) {
        toppingsPrice = toppingsPrice + 0.25;
    }
    if (hotFudgeCheckbox.checked) {
        toppingsPrice = toppingsPrice + 1.25;
    }
    if (cherryCheckbox.checked) {
        toppingsPrice = toppingsPrice + 0.25;
    }

    // Calculate scoop
    scoopPrice = pricePerScoop + ((numberOfScoops - 1) * moreScoopAdded);

    // calculate tax and total price
    tax = (scoopPrice + toppingsPrice) * taxRate;
    totalPrice = scoopPrice + toppingsPrice + tax;


    // showing the ouput
    outputBasePrice.innerHTML = `$${(scoopPrice + toppingsPrice).toFixed(2)}`;
    outputTax.innerHTML = `$${tax.toFixed(2)}`;
    outputTotal.innerHTML = `$${totalPrice.toFixed(2)}`;
}

