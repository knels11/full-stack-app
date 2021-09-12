async function logout() {
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}



document.querySelector('#logout').addEventListener('click', logout);

async function logoutFormHandler(event) {
    const email = document.querySelector('#email-logout').value.trim();
    const password = document.querySelector('#password-logout').value.trim();

    if (email && password) {
        const response = await fetch('./api/users/logout', {
            method: 'post', 
            body: JSON.stringify({
                email, 
                password,
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/dashboard/');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.logout-form').addEventListener('submit', logoutFormHandler);