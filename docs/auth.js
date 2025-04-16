const supabaseUrl = "https://axmxviywthnednwdvrik.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF4bXh2aXl3dGhuZWRud2R2cmlrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0NzgyMjIsImV4cCI6MjA1MjA1NDIyMn0.Gx1cirBYFb4kCHF5kfwNJYmwKF0t9PxsKxdRZrjH3VM";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);

// Admin Sign-In State
let isAdmin = false;

// Handle Admin Button Click
document.getElementById("signInAsAdmin").addEventListener("click", () => {
  isAdmin = true; // Set admin mode
  alert("You are now signing in as an admin."); // Optional confirmation

  // Toggle button visibility
  document.getElementById("signInAsAdmin").style.display = "none";
  document.getElementById("switchToPatient").style.display = "inline-block";
});

// Handle Switch to Patient Button Click
document.getElementById("switchToPatient").addEventListener("click", () => {
  isAdmin = false; // Reset admin mode
  alert("You are now signing in as a patient."); // Optional confirmation

  // Toggle button visibility
  document.getElementById("signInAsAdmin").style.display = "inline-block";
  document.getElementById("switchToPatient").style.display = "none";
});

// Reset Admin State when switching back to regular sign-in
document.getElementById("showSignIn").addEventListener("click", () => {
  isAdmin = false; // Reset admin mode
  document.getElementById("signInAsAdmin").style.display = "inline-block";
  document.getElementById("switchToPatient").style.display = "none";
});

// Sign In
document
  .getElementById("login-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    try {
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

      alert("Login successful!");

      // Redirect based on admin state
      if (isAdmin) {
        window.location.href = "homepageAdmin.html";
      } else {
        window.location.href = "homepage.html";
      }
    } catch (error) {
      alert(error.message);
    }
  });

// Sign Up
document
  .getElementById("signup-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { data, error } = await supabaseClient.auth.signUp({
        email,
        password,
      });
      if (error) throw error;
      alert("Signup successful! Please log in.");
      document.getElementById("showSignIn").click();
    } catch (error) {
      alert(error.message);
    }
  });

// Reset Password
document
  .getElementById("reset-password-form")
  .addEventListener("submit", async (event) => {
    event.preventDefault();
    const email = document.getElementById("reset-email").value;

    try {
      const { data, error } = await supabaseClient.auth.resetPasswordForEmail(
        email
      );
      if (error) throw error;
      alert("Password reset email sent!");
    } catch (error) {
      alert(error.message);
    }
  });
// Sign In
// document
//   .getElementById("login-form")
//   .addEventListener("submit", async (event) => {
//     event.preventDefault();
//     const email = document.getElementById("login-email").value;
//     const password = document.getElementById("login-password").value;

//     try {
//       const { data, error } = await supabaseClient.auth.signInWithPassword({
//         email,
//         password,
//       });
//       if (error) throw error;
//       alert("Login successful!");
//       // Redirect to user-specific dashboard
//       window.location.href = "homepage.html";
//     } catch (error) {
//       alert(error.message);
//     }
//   });

// Toggle forms
// document.getElementById("showSignUp").addEventListener("click", () => {
//   document.getElementById("signIn").style.display = "none";
//   document.getElementById("signup").style.display = "block";
// });
// document.getElementById("showSignIn").addEventListener("click", () => {
//   document.getElementById("signup").style.display = "none";
//   document.getElementById("signIn").style.display = "block";
// });
// document.getElementById("recoverPassword").addEventListener("click", () => {
//   document.getElementById("signIn").style.display = "none";
//   document.getElementById("resetPassword").style.display = "block";
// });
// document.getElementById("backToSignIn").addEventListener("click", () => {
//   document.getElementById("resetPassword").style.display = "none";
//   document.getElementById("signIn").style.display = "block";
// });
