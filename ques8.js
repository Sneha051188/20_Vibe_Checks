document.getElementById("registerForm").addEventListener("submit", function (event) {
    const password = document.getElementById("password").value;
  
    const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
  
    if (!strongPassword.test(password)) {
      alert("Password must be at least 8 characters long and include uppercase, lowercase, number, and symbol.");
      event.preventDefault(); // Stop form from submitting
    }
  });
  