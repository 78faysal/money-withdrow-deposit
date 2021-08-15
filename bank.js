//handle deposit event
document.getElementById('deposit-button').addEventListener('click', function(){
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText)

    // update deposit total 
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositTotal;
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input fild
    depositInput.value = '';
})


// handle withdrow event handler
document.getElementById('withdrow-button').addEventListener('click', function(){
    const withdrowInput = document.getElementById('withdrow-input');
    const withdrowAmountText = withdrowInput.value;
    const newwithdrowAmount = parseFloat(withdrowAmountText);
    console.log(newwithdrowAmount);

    // set withdrow total 
    const withdrowTotal = document.getElementById('withdrow-total');
    const previousWithdrowText = withdrowTotal.innerText;
    const previousWithdrowTotal = parseFloat(previousWithdrowText);


    const newWithdrowTotal = previousWithdrowTotal + newwithdrowAmount;
    withdrowTotal.innerText = newWithdrowTotal;

    //update balance 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalancetext = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalancetext);
    const newBalanceTotal = previousBalanceTotal - newwithdrowAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear withdrow input 
    withdrowInput.value = '';
})