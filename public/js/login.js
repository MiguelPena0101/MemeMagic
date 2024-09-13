document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;


    const users = JSON.parse(localStorage.getItem('users')) || [];

    
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
       
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        alert('Login successful!');
        window.location.href = '/'; // Redirect to home page
    } else {
        alert('Invalid username or password.');
    }
});
