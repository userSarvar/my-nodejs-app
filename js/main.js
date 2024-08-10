// // main.js
// document.getElementById('loginForm').addEventListener('submit', function (e) {
//     e.preventDefault();
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Example login logic (this should be replaced with actual authentication)
//     if (username === 'ceo' && password === 'password') {
//         localStorage.setItem('role', 'ceo');
//         window.location.href = 'home.html';
//     } else if (username === 'hr' && password === 'password') {
//         localStorage.setItem('role', 'hr');
//         window.location.href = 'home.html';
//     } else if (username === 'rm' && password === 'password') {
//         localStorage.setItem('role', 'rm');
//         window.location.href = 'home.html';
//     } else if (username === 'analytics' && password === 'password') {
//         localStorage.setItem('role', 'analytics');
//         window.location.href = 'home.html';
//     } else if (username === 'sv' && password === 'password') {
//         localStorage.setItem('role', 'sv');
//         window.location.href = 'home.html';
//     } else if (username === 'sa' && password === 'password') {
//         localStorage.setItem('role', 'sa');
//         window.location.href = 'home.html';
//     } else {
//         alert('Invalid username or password');
//     }
// });


// document.addEventListener('DOMContentLoaded', function () {
//     const role = localStorage.getItem('role');
//     if (role) {
//         document.getElementById('role').textContent = role.toUpperCase();
//         document.getElementById('roleLink').href = `role_pages/${role}.html`;
//     }
// });

// document.getElementById('changePasswordForm').addEventListener('submit', function (change) {
//     change.preventDefault();
//     const currentPassword = document.getElementById('currentPassword').value;
//     const newPassword = document.getElementById('newPassword').value;
//     const confirmPassword = document.getElementById('confirmPassword').value;

//     // Example password change logic (this should be replaced with actual authentication)
//     if (currentPassword === 'password' && newPassword === confirmPassword) {
//         alert('Password changed successfully');
//     } else {
//         alert('Password change failed');
//     }
// });
