
document.getElementById('btn-case-plus').addEventListener('click', function () {
    const caseInputFieldNumber = plusMinus('case-number')
    const afterClickNumber = caseInputFieldNumber + 1;
    setNumber('case-number', 'case-price', afterClickNumber, 59)

})



document.getElementById('btn-case-minus').addEventListener('click', function () {
    const caseInputFieldNumber = plusMinus('case-number');
    const afterMinusNumber = caseInputFieldNumber - 1;
    setNumber('case-number', 'case-price', afterMinusNumber, 59);
})




document.getElementById('case-remove').addEventListener('click', function(){
    remove('case-price', 'case-number');

})








// Another Way
// function update (isIncrease){
//     const caseInputField = document.getElementById('case-number');
//     const caseInputFieldString = caseInputField.value;
//     const caseInputFieldNumber = parseInt(caseInputFieldString);
//     let newCaseNumber;
//     if(isIncrease === true){
//         newCaseNumber = caseInputFieldNumber + 1;
//     }
//     else{
//         newCaseNumber = caseInputFieldNumber - 1;
//     }

//     caseInputField.value = newCaseNumber;

//     return newCaseNumber;
// }


// function totalPrice (quantity){

//    const casePrice = document.getElementById('case-price');
//    const originalPrice = 59;
//    const totalCasePrice = quantity * originalPrice;
//    casePrice.innerText = totalCasePrice;
// }



// document.getElementById('btn-case-plus').addEventListener('click', function(){
//    const caseQuantity = update(true);
//    totalPrice(caseQuantity);
// })



// document.getElementById('btn-case-minus').addEventListener('click', function(){
//     const caseQuantity = update(false);
//     totalPrice(caseQuantity);})