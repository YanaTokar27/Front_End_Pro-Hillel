const loginButton = document.querySelector('.login');
const loader = document.querySelector('.loader');
const email = document.getElementById('email');
const password = document.getElementById('password');

loginButton.addEventListener('click', function (event) {
    if (!email.value || !password.value) {
        return false
    }
    showInputValues();

    loader.style.display = 'inline-block';

    event.preventDefault();

    setTimeout(redirectToNextPage, 2000);
})

function redirectToNextPage() {
    window.location.href = 'profile.html';
}

function showInputValues() {
    console.log(email.value);
    console.log(password.value);
}

