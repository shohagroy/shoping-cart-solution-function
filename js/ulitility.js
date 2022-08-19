
//  1  pluse button click function 
function buttonClickToIncrise(quentatyId, totalPrise, singlePrice){
    const quentatyFild = document.getElementById(quentatyId);
    const quentatyFildString = quentatyFild.value;
    const quentatyFildNumber = parseInt(quentatyFildString);

    const newQuentatyFildNumber = quentatyFildNumber + 1;
    quentatyFild.value = newQuentatyFildNumber;
    
    const totalPhonePriseFild = document.getElementById(totalPrise);
    const totalPhoneprice = totalPhonePriseFild.innerText = newQuentatyFildNumber * singlePrice;

    return totalPhoneprice;

}

//  2  minus buttin click function 
function buttonClickToDiscrise(quentatyId,totalPrise, singlePrice){
    const quentatyFild = document.getElementById(quentatyId);
    const quentatyFildString = quentatyFild.value;
    const quentatyFildNumber = parseInt(quentatyFildString);
    
    const newQuentatyFildNumber = quentatyFildNumber - 1;

    const totalPhonePrise = document.getElementById(totalPrise);

    if(newQuentatyFildNumber >= 1){
        quentatyFild.value = newQuentatyFildNumber;
        const totalPhonePriseFild = document.getElementById(totalPrise);
        const totalPhoneprice = totalPhonePriseFild.innerText = newQuentatyFildNumber * singlePrice;

        return totalPhoneprice;
    }
    else{
        quentatyFild.value = 0;
        totalPhonePrise.innerText = 0;
        return 0
    }
    
}

// 

//  3 total ammount genarator function 
function totalAmmountGenarator(){

    function subTotalPriceGenarator(totalPriceId){
        const totalPriceFild = document.getElementById(totalPriceId);
        const totalpriceString = totalPriceFild.innerText;
        const totalPriceNumber = parseFloat(totalpriceString);
        return totalPriceNumber;
    }
    
    const phoneTotalPrice = subTotalPriceGenarator('phone-total');
    const caseTotalPrice = subTotalPriceGenarator('case-total');
    console.log(phoneTotalPrice, caseTotalPrice);

    const subTotalFild = document.getElementById('sub-total').innerText = phoneTotalPrice + caseTotalPrice;
    
    const taxTotalFild = document.getElementById('tax-amount').innerText = subTotalFild * 0.1

    document.getElementById('final-total').innerText = subTotalFild + taxTotalFild;
}

// remove Product section function
function removeProductSection(removeContainer){
    console.log('Phone deleted')
    const removeitemContainer = document.getElementById(removeContainer);
    removeitemContainer.parentNode.removeChild(removeitemContainer)
}