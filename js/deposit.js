document.getElementById('depositButton').addEventListener('click', function () {
    // const depositInput = document.getElementById('depositInput')
    // const depositInputStringValue = depositInput.value;
    // const newdepositValue = parseFloat(depositInputStringValue)
    const newdepositAmount = getInputFliedValueId("depositInput");


    // const previousDeposit = document.getElementById('previousDeposit')
    // const previousDepositStaingValue = previousDeposit.innerText;
    // const previousDepositValue = parseFloat(previousDepositStaingValue)
    const previousDepositAmount = getElementValueId("previousDeposit")


    const currentDepositValueTotal = previousDepositAmount + newdepositAmount;


    // previousDeposit.innerText = currentDepositValueTotal;
    setElementValue("previousDeposit", currentDepositValueTotal)

    // const previousBalance = document.getElementById('previousBalance')
    // const previousStringBalance = previousBalance.innerText;
    // const previousBalanceValue = parseFloat(previousStringBalance);
    const previousBalance = getElementValueId("previousBalance")

    const currentBalanceTotal = previousBalance + newdepositAmount;

    // previousBalance.innerText = currentBalance;
    setElementValue("previousBalance", currentBalanceTotal)

    // depositInput.value = "";

})