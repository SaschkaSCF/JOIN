async function init() {
    await downloadFromServer();
    users = JSON.parse(backend.getItem('users')) || [];
}


function login() {
    let email = document.getElementById('email');
    let password = document.getElementById('password');

    let user = users.find(u => u.email == email.value && u.password == password.value);

    console.log(user);
    if (user) {
        console.log('User found!');
    } else {
        console.log('User not found!');
    }
}


/**
 * This function is used to remove the login page and to show the sign-up page
 * 
 */
// function showSignUp() {
//     document.getElementById('sign-up-page').classList.remove('d-none');
//     document.getElementById('login-page').classList.add('d-none');
// }


/**
 * This function is used to go back to the login page from forgot password
 * 
 */
function backToLogin() {
    document.getElementById('login-page').classList.remove('d-none');
    document.getElementById('forgot-pw-page').classList.add('d-none');
    // document.getElementById('sign-up-page').classList.add('d-none');
}


/**
 * 
 * This function is used to remove the login page and to show the forgot passsword page
 */
function showForgotPw() {
    document.getElementById('forgot-pw-page').classList.remove('d-none');
    document.getElementById('login-page').classList.add('d-none');
}


/**
 * 
 * This function is used to go back from the reset password page to the forgot password game
 */
function backToForgotPw() {
    document.getElementById('forgot-pw-page').classList.remove('d-none');
    document.getElementById('reset-pw-page').classList.add('d-none');
}