document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert('Login Successfulsss!');
    } else {
        alert('Please fill in all fields!');
    }
});
