const jobFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').value.trim();
    const location = document.querySelector('#location').value.trim();
    const salary = document.querySelector('#salary').value.trim();
    const body = document.querySelector('#body').value.trim();
    const qualification = document.querySelector('#qualification').value.trim();
   
    if (title && location && salary && body && qualification) {
        const response = await fetch('/api/profile', {
            method: "POST",
            body: JSON.stringify({title, location, salary, body, qualification}),
            headers: {"Content-Type" : "application/json"},
        });

        if(response.ok) {
            document.location.reload();
        } else {
            alert('failed to create new job post');
        }
    }
}

document.querySelector('.job-form').addEventListener('submit', jobFormHandler);