
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        // console.log(err);
        alert('Failed to log in.');
      }
    }
  };

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#create-username').value.trim();
  const email = document.querySelector('#create-email').value.trim();
  const password = document.querySelector('#create-password').value.trim();

  if(username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: {'Content-Type': 'application/json'},
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('failed to sign up');
    }
  }
};

  document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);