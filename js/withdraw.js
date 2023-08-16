document.getElementById('withdrawButton').addEventListener('click', function () {
    // const withdrawInput = document.getElementById('withdrawInput')
    // const withdrawInputStringValue = withdrawInput.value;
    // const newwithdrawValue = parseFloat(withdrawInputStringValue)
    const newWithdrawAmount = getInputFliedValueId("withdrawInput")

    // const previousWithdraw = document.getElementById('previousWithdraw')
    // const previousWithdrawStaingValue = previousWithdraw.innerText;
    // const previousWithdrawValue = parseFloat(previousWithdrawStaingValue)
    const previousWithdrawAmount = getElementValueId("previousWithdraw")



    // const previousBalances = document.getElementById('previousBalance')
    // const previousStringBalances = previousBalances.innerText;
    // const previousBalancesValue = parseFloat(previousStringBalances);
    const previousBalance = getElementValueId("previousBalance")

    // withdrawInput.value = "";


    if (newWithdrawAmount > previousBalance) {
        alert("Balance nai.....jaaaa bag beta gorib")
        return;
    } 

    const currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;


    // previousWithdraw.innerText = currentWithdraw;
    setElementValue("previousWithdraw", currentWithdrawTotal)


    const currentBalances = previousBalance - newWithdrawAmount;


    //  previousBalances.innerText = currentBalances;
    setElementValue("previousBalance", currentBalances)




})