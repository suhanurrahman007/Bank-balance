document.getElementById('depositButton').addEventListener('click', function getDeposit() {
    const depositInput = document.getElementById('depositInput')
    const depositInputStringValue = depositInput.value;
    const newdepositValue = parseFloat(depositInputStringValue)

    const previousDeposit = document.getElementById('previousDeposit')
    const previousDepositStaingValue = previousDeposit.innerText;
    const previousDepositValue = parseFloat(previousDepositStaingValue)
    const currentDeposit = previousDepositValue + newdepositValue;
    previousDeposit.innerText = currentDeposit ;

    const previousBalance = document.getElementById('previousBalance')
    const previousStringBalance = previousBalance.innerText;
    const previousBalanceValue = parseFloat(previousStringBalance);
    const currentBalance = previousBalanceValue + newdepositValue;
    previousBalance.innerText = currentBalance;

    depositInput.value = "";
    
})