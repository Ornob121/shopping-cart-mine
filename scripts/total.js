const price1 = document.getElementById('phone-price');
const price1String = price1.innerText;
const price1Number = parseInt(price1String);



const price2 = document.getElementById('case-price');
const price2String = price2.innerText;
const price2Number = parseInt(price2String);



const finalTotalPrice = price1Number + price2Number;
const finalTotalPriceNumber = parseInt(finalTotalPrice)


const subTotal =  document.getElementById('sub-total-price');

subTotal.innerText = finalTotalPrice;



//



const tax =  document.getElementById('tax-total');



const taxAmount = finalTotalPrice * 0.1;
const taxFixed = taxAmount.toFixed(2);
const taxFixedNumber = parseFloat(taxFixed);

tax.innerText = taxFixedNumber;

const fullPayment = finalTotalPriceNumber + taxFixedNumber;
console.log(fullPayment)


const total =  document.getElementById('total');
total.innerText = fullPayment
