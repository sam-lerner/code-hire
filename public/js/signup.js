async function signupFormHandler(event) {
  event.preventDefault();

  const name = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
const acount = document.querySelector('')
  if (name && password) {
    const response = await fetch('/api/users/', {
      method: 'POST',
      body: JSON.stringify({
        name,
        password,
        "account-type":account,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);