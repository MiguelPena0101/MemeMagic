document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the default way
    
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Send login request to the server
    fetch('/api/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => {
        if (!response.ok) {
            // Handle non-2xx HTTP responses
            throw new Error('Login failed. Please check your username and password.');
        }
        return response.json();
    })
    .then(data => {
        if (data.message === 'Logged in successfully') {
            // Store user details in localStorage
            localStorage.setItem('loggedInUser', JSON.stringify(data.user));
            // Redirect to home page
            window.location.href = '/';
        } else {
            alert(data.message || 'An error occurred during login.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});
