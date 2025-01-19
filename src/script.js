const signUpButton = document.getElementById('signUpButton');
const signInButton = document.getElementById('signInButton');
const signInForm = document.getElementById('signIn');
const signUpForm = document.getElementById('signup');

// Make sure DOM is loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
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

    signInButton.addEventListener('click', function() {
        signUpForm.style.opacity = '0';
        setTimeout(() => {
            signUpForm.style.display = 'none';
            signInForm.style.display = 'block';
            signInForm.classList.add('animate-in');
            setTimeout(() => {
                signInForm.style.opacity = '1';
            }, 50);
        }, 300);
    });
});
