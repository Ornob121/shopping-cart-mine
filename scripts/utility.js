function plusMinus(btn) {
    const caseInputField = document.getElementById(btn);
    const caseInputFieldString = caseInputField.value;
    const caseInputFieldNumber = parseInt(caseInputFieldString);
    return caseInputFieldNumber;
}



function setNumber(btn, place, number, price) {
    const result = document.getElementById(btn);
    result.value = number;


    const casePrice = document.getElementById(place);
    const caseOriginalPrice = price;

    const totalPrice = result.value * caseOriginalPrice;
    casePrice.innerText = totalPrice;


    const price1 = document.getElementById('phone-price');
    const price1String = price1.innerText;
    const price1Number = parseInt(price1String);



    const price2 = document.getElementById('case-price');
    const price2String = price2.innerText;
    const price2Number = parseInt(price2String);



    const finalTotalPrice = price1Number + price2Number;


    const subTotal = document.getElementById('sub-total-price');

    subTotal.innerText = finalTotalPrice;


    const tax = document.getElementById('tax-total');



    const taxAmount = finalTotalPrice * 0.1;
    const taxFixed = taxAmount.toFixed(2);
    const taxFixedNumber = parseFloat(taxFixed);

    tax.innerText = taxFixedNumber;

    const fullPayment = price1Number + price2Number + taxFixedNumber;
    console.log(fullPayment)


    const total = document.getElementById('total');
    total.innerText = fullPayment;

}




function remove(caseR, input) {

    const priceRemove = document.getElementById(caseR);
    priceRemove.innerText = 0;

    const inputRemove = document.getElementById(input);
    inputRemove.value = 0;

}