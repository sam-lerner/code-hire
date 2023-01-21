

async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
    const salary_range = document.querySelector('#salary-range').value.trim();
    const category = document.querySelector('#category').value.trim();
    const location = document.querySelector('#location').value.trim();
    const skill = document.querySelector('#skill').value.trim();

    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
        salary_range,
        category,
        location,
        skill
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  };
 
  document
  .querySelector('.new-job')
  .addEventListener('submit', newFormHandler);