// JavaScript to handle login and file upload

// Login Form Handler
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simulate login (replace with real auth later)
  if (email === 'patient@example.com' && password === 'password123') {
    alert('Login successful!');
    // Display the file upload section after login success
    document.getElementById('uploadForm').style.display = 'block';
  } else {
    alert('Invalid email or password!');
  }
});

// File Upload Handler
document.getElementById('uploadForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent form submission

  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0]; // Get the first file

  if (file) {
    console.log(`Uploading file: ${file.name}`);

    // Simulate file upload (you can replace this with real upload code like Firebase later)
    setTimeout(() => {
      document.getElementById('uploadResult').innerText = `File uploaded successfully: ${file.name}`;
      // Reset form after upload
      fileInput.value = ''; // Clear file input
    }, 2000); // Simulate upload time (2 seconds)

  } else {
    alert('Please select a file to upload.');
  }
});
