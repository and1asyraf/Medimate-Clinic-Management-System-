document.getElementById('appointmentForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Get values from the form
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    const reason = document.getElementById('reason').value;

    // Simulate appointment booking process
    console.log(`Appointment Booked:
    Date: ${appointmentDate}
    Time: ${appointmentTime}
    Reason: ${reason}`);

    // Show popup message
    const popupMessage = document.getElementById('popupMessage');
    popupMessage.style.display = 'flex'; // Show the popup

    // Close the popup when "Close" button is clicked
    document.getElementById('closePopup').addEventListener('click', function() {
        popupMessage.style.display = 'none'; // Hide the popup
    });

    // Reset the form
    document.getElementById('appointmentForm').reset();
});
