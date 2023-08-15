document.getElementById('withdrawButton').addEventListener('click', function getWithdraw() {
    const withdrawInput = document.getElementById('withdrawInput')
    const withdrawInputStringValue = withdrawInput.value;
    const newwithdrawValue = parseFloat(withdrawInputStringValue)

    const previousWithdraw = document.getElementById('previousWithdraw')
    const previousWithdrawStaingValue = previousWithdraw.innerText;
    const previousWithdrawValue = parseFloat(previousWithdrawStaingValue)
    

    const previousBalances = document.getElementById('previousBalance')
    const previousStringBalances = previousBalances.innerText;
    const previousBalancesValue = parseFloat(previousStringBalances);

    withdrawInput.value = "";


    if (newwithdrawValue > previousBalancesValue) {
        alert("Balance nai.....jaaaa bag beta gorib")
        return;
    } 

    const currentWithdraw = previousWithdrawValue + newwithdrawValue;
    previousWithdraw.innerText = currentWithdraw;


     const currentBalances = previousBalancesValue - newwithdrawValue;
     previousBalances.innerText = currentBalances;
   


})