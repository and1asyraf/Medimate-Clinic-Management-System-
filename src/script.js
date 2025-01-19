document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.getElementById('signUpButton');
    const signInButton = document.getElementById('signInButton');
    const signInForm = document.getElementById('signIn');
    const signUpForm = document.getElementById('signup');

    signUpButton.addEventListener('click', function() {
        signInForm.style.opacity = '0';
        setTimeout(() => {
            signInForm.style.display = 'none';
            signUpForm.style.display = 'block';
            signUpForm.classList.add('animate-in');
            setTimeout(() => {
                signUpForm.style.opacity = '1';
            }, 50);
        }, 300);
    });

    signInButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default form submission
        // Redirect to the homepage
        window.location.href = 'homepage.html'; // Use relative path
    });
});
