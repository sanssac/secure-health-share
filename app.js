// app.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission from refreshing the page
  
  // Get form values
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
  
  // Example: Add login logic here (e.g., validation, sending data to the server)
  // For now, we'll just show a message
  alert('Login successful! (This is a dummy action)');
});
