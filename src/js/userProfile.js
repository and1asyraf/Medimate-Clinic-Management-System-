document.addEventListener('DOMContentLoaded', function() {
    const editProfileButton = document.getElementById('editProfileButton');
    const editForm = document.getElementById('editForm');
    const profileForm = document.getElementById('profileForm');
    const cancelEditButton = document.getElementById('cancelEditButton');

    editProfileButton.addEventListener('click', function() {
        // Change button style to indicate it's active
        this.classList.add('editing');

        // Make input fields editable
        document.getElementById('lastName').removeAttribute('readonly');
        document.getElementById('firstName').removeAttribute('readonly');
        document.getElementById('email').removeAttribute('readonly');
        document.getElementById('phone').removeAttribute('readonly');

        // Show the save button and hide the edit button
        document.getElementById('saveProfileButton').style.display = 'inline-block';
        document.getElementById('editProfileButton').style.display = 'none';
    });

    cancelEditButton.addEventListener('click', function() {
        document.getElementById('editForm').style.display = 'none';
        document.querySelector('.profile-info').style.display = 'block';
    });

    profileForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('editName').value;
        const email = document.getElementById('editEmail').value;
        const phone = document.getElementById('editPhone').value;

        document.getElementById('userName').innerText = name;
        document.getElementById('userEmail').innerText = email;
        document.getElementById('userPhone').innerText = phone;

        editForm.style.display = 'none';
    });

    document.getElementById('saveProfileButton').addEventListener('click', function() {
        // Capture the updated values
        const lastName = document.getElementById('lastName').value;
        const firstName = document.getElementById('firstName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        // Log the updated information (or send it to a server)
        console.log("Updated Information:", { lastName, firstName, email, phone });

        // Make input fields read-only again
        document.getElementById('lastName').setAttribute('readonly', true);
        document.getElementById('firstName').setAttribute('readonly', true);
        document.getElementById('email').setAttribute('readonly', true);
        document.getElementById('phone').setAttribute('readonly', true);

        // Hide the save button and show the edit button
        document.getElementById('saveProfileButton').style.display = 'none';
        document.getElementById('editProfileButton').style.display = 'inline-block';

        // Remove the editing class from the button
        document.getElementById('editProfileButton').classList.remove('editing');
    });
});