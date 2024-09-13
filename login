
<h2>Login</h2>

<form action="/api/users/login" method="POST">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username" required>

    <label for="password">Password:</label>
    <input type="password" id="password" name="password" required>

    <button type="submit">Login</button>
</form>

<p>Don't have an account? <a href="/register">Register here</a>.</p>