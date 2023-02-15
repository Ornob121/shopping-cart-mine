document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const phonePlus = plusMinus('phone-number');
    const quantity = phonePlus + 1;

    setNumber('phone-number','phone-price', quantity, 1219)
})



document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const phoneMinus = plusMinus('phone-number');
    const quantity = phoneMinus - 1;
    setNumber('phone-number', 'phone-price', quantity, 1219);
})


document.getElementById('remove-phone').addEventListener('click', function(){
    remove( 'phone-price', 'phone-number')
})