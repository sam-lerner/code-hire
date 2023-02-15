
const signupFormHandler = async (event) => {
  event.preventDefault();

  const firstName = document.querySelector('#create-firstName').value.trim();
  const lastName = document.querySelector('#create-lastName').value.trim();
  const email = document.querySelector('#create-email').value.trim();
  const password = document.querySelector('#create-password').value.trim();
  const github = document.querySelector('#create-github').value.trim();
  const linkedin = document.querySelector('#create-linkedin').value.trim();
  const is_employer = document.querySelector('#create-is_employer:checked') ? true : false;
  // const front_end = document.querySelector('#create-front_end:checked') ? true : false;
  // const back_end = document.querySelector('#create-back_end:checked') ? true : false;
  // const full_stack = document.querySelector('#create-full_stack:checked') ? true : false;
  const skills = document.querySelector('#skills').value.trim();
  const about = document.querySelector('#about').value.trim();
 

  // if(firstName && lastName && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, email, password, github, linkedin, is_employer, skills, about }),
      headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('failed to sign up');
    }
  // }
};


document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);