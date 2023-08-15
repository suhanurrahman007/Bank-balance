
document.getElementById('login').addEventListener('click', function getLogin() {
    const email = document.getElementById('email')
    const emailInput = email.value;
    
    const password = document.getElementById('password')
    const passwordInput = password.value;

    if (emailInput === "darkpanther6969@gmail.com" && passwordInput === 'suhan') {
        window.location.href = "bank.html"
        
    } else {
        alert("Plz Enter your valid Value")
    }

})