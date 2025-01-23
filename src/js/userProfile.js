document.addEventListener('DOMContentLoaded', function() {
    const editProfileButton = document.getElementById('editProfileButton');
    const editForm = document.getElementById('editForm');
    const profileForm = document.getElementById('profileForm');
    const cancelEditButton = document.getElementById('cancelEditButton');

    // Get modal element
    var modal = document.getElementById("editModal");

    // Get button that opens the modal
    var btn = document.getElementById("editProfileButton");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

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

    // Save changes button functionality
    document.getElementById('saveProfileButton').addEventListener('click', function() {
        // Capture the updated values
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        // Update the displayed values
        document.getElementById('userName').innerText = `${firstName} ${lastName}`;
        document.getElementById('userEmail').innerText = email;
        document.getElementById('userPhone').innerText = phone;

        // Close the modal
        modal.style.display = "none";
    });
});