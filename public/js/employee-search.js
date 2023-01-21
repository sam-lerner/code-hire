const employeeSearchFormHandler = async (event) => {
    event.preventDefault();

    // Search by name and/or skill
    const username = document.querySelector('#username').value.trim();
    const skills = document.querySelector('#skills').value.trim();
    let conditionalPost = {};
    username ? conditionalPost.username = username : null;
    skills ? conditionalPost.skills = skills : null;


    const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ ...conditionalPost }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Confirm name of API route
    if (response.ok) {
        document.location.replace('/users')
    } else {
        alert(response.statusText);
        document.querySelector('#employee-form').style.display = 'block';
    }

}

document
    .querySelector('.employee-search')
    .addEventListener('submit', employeeSearchFormHandler);