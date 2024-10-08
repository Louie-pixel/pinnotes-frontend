// register.js
document.getElementById('register-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  const response = await postData('/register', { email, password });
  if (response.success) {
    alert('Registration successful!');
    window.location.href = '/login'; // Redirect to the login page
  } else {
    alert('Registration failed: ' + response.message);
  }
});
