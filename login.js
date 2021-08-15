document.getElementById('login-submit').addEventListener('click', function(event){
    event.preventDefault();
    const emailField = document.getElementById('user-email');
    // get user email 
    const userEmail = emailField.value;
    console.log(userEmail)
    // get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword)

    // check email and password 
    if (userEmail == 'faysal7830@gmail.com' && userPassword == 'secret'){
        window.location.href = 'banking.html'
    }
    
})