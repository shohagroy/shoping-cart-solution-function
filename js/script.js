
// phone plus button get and set 
document.getElementById('btn-phone-plus').addEventListener('click', () =>{
    buttonClickToIncrise('phone-number-field','phone-total' , 500);

    // coll sub total function 
    totalAmmountGenarator();

});


// phone minus button get and set 
document.getElementById('btn-phone-minus').addEventListener('click', () =>{
    buttonClickToDiscrise('phone-number-field', 'phone-total', 500);

    // coll sub total function 

    totalAmmountGenarator();

});





// case pluse button get and set 
document.getElementById('btn-case-plus').addEventListener('click', () =>{
    buttonClickToIncrise('case-number-field','case-total', 50);

    // coll sub total function 
    totalAmmountGenarator();

});


// case pluse button get and set 
document.getElementById('btn-case-minus').addEventListener('click', () =>{
    buttonClickToDiscrise('case-number-field', 'case-total', 50);

    // coll sub total function 
    totalAmmountGenarator();

});


// phone section remove button 
document.getElementById('phone-remove-btn').addEventListener('click', () =>{
    removeProductSection('iphone-container');
})

// case section remove button 
document.getElementById('case-remove-btn').addEventListener('click', () =>{
    removeProductSection('case-container');

})