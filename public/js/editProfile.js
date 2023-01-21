const editProfile = async (event) => {
    event.preventDefault();
    
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();
    const github = document.querySelector('#github').value.trim();
    const linkedin = document.querySelector('#linkedin').value.trim();
    const resume = document.querySelector('#resume').value.trim();

    const response = await fetch ('/api/users/edit', {
        method: 'PUT',
        body: JSON.stringify({
            name,
            email,
            password,
            github,
            linkedin,
            resume
        }),
        headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        console.log(err);
        alert('Failed to log in');
    }
};

document.querySelector('#save').addEventListener('submit', editProfile);