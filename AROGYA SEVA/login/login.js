// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;
//     const errorMessage = document.getElementById('errorMessage');

//     // Simple username and password validation
//     if (username === 'user' && password === 'pass') {
//         window.location.href = '../INDEX.html'; 
//     }else if (username === 'hospital' && password === 'pass') {
//         window.location.href = '../admin/admin.html';
//     } else {
//         errorMessage.textContent = 'Invalid username or password';
//         errorMessage.style.display = 'block';
//     }
// });
// login.js



document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simple username and password validation
    if ((username === 'user' && password === 'pass') || (username === 'hospital' && password === 'pass')) {
        // Request location before redirecting
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    // You can use position.coords.latitude and position.coords.longitude here if needed
                    // Redirect based on username after location is obtained
                    redirectUser(username);
                },
                (error) => {
                    showError(error);
                    // Redirect regardless of location permission
                    redirectUser(username);
                }
            );
        } else {
            errorMessage.textContent = 'Geolocation is not supported by this browser.';
            errorMessage.style.display = 'block';
            // Redirect regardless of location support
            redirectUser(username);
        }
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.display = 'block';
    }
});

function redirectUser(username) {
    if (username === 'user') {
        window.location.href = '../INDEX.html';
    } else if (username === 'hospital') {
        window.location.href = '../admin/admin.html';
    }
}

function showError(error) {
    const errorMessage = document.getElementById('errorMessage');
    switch (error.code) {
        case error.PERMISSION_DENIED:
            errorMessage.textContent = 'User denied the request for Geolocation.';
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage.textContent = 'Location information is unavailable.';
            break;
        case error.TIMEOUT:
            errorMessage.textContent = 'The request to get user location timed out.';
            break;
        case error.UNKNOWN_ERROR:
            errorMessage.textContent = 'An unknown error occurred.';
            break;
    }
    errorMessage.style.display = 'block';
}
