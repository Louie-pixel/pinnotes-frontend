// login.js
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  const response = await postData('/login', { email, password });
  if (response.success) {
    alert('Login successful!');
    localStorage.setItem('user', JSON.stringify({ email }));
    window.location.href = '/'; // Redirect to the home page
  } else {
    alert('Login failed: ' + response.message);
  }
});
