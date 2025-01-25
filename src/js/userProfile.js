console.log("userProfile.js loaded"); // Debugging line

document.addEventListener('DOMContentLoaded', function() {
    const editProfileButton = document.getElementById('editProfileButton');
    const editForm = document.getElementById('editForm');
    const profileForm = document.getElementById('profileForm');
    const cancelEditButton = document.getElementById('cancelEditButton');
    const modal = document.getElementById("editModal");
    const span = document.getElementsByClassName("close")[0];
    const uploadImage = document.getElementById('uploadImage');
    const profilePicture = document.getElementById('profilePicture');

    // When the user clicks the button, open the modal 
    if (editProfileButton) {
        editProfileButton.onclick = function() {
            modal.style.display = "block";
        };
    } else {
        console.error("Element with ID 'editProfileButton' not found.");
    }

    // When the user clicks on <span> (x), close the modal
    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        };
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

    // Handle image upload
    uploadImage.addEventListener('change', function(event) {
        console.log("File input changed"); // Debugging line
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profilePicture.src = e.target.result; // Set the new image source
                console.log("Image updated"); // Debugging line
            }
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    });

    // Save changes button functionality
    const saveButton = document.getElementById('saveProfileButton');
    if (saveButton) {
        saveButton.addEventListener('click', function() {
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
    } else {
        console.error("Element with ID 'saveProfileButton' not found.");
    }

    editProfileButton.addEventListener("click", function () {
        modal.classList.add("show");
    });

    const closeModal = () => {
        modal.classList.remove("show");
        setTimeout(() => (modal.style.display = "none"), 300);
    };

    document.querySelector(".close").onclick = closeModal;
    window.onclick = function (event) {
        if (event.target == modal) closeModal();
    };
});