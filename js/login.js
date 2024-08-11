document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    let role;
    // Example login logic (this should be replaced with actual authentication)
    if (username === 'ceo' && password === 'password') {
        role = 'retailCoordinator';
    } else if (username === 'hr' && password === 'password') {
        role = 'hr';
    } else if (username === 'rm' && password === 'password') {
        role = 'regionalManager';
    } else if (username === 'ceo' && password === 'password1') {
        role = 'retailAnalytics';
    } else if (username === 'sv' && password === 'password') {
        role = 'supervisor';
    } else if (username === 'sa' && password === 'password') {
        role = 'promoter';
    } else {
        alert('Invalid username or password');
        return;
    }

    localStorage.setItem('role', role);
    window.location.href = 'home.html';
});
