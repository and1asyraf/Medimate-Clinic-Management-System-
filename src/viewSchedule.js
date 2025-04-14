// Function to open the reschedule modal
function openRescheduleModal() {
    const modal = document.getElementById('rescheduleModal');
    modal.style.display = 'flex';
}

// Function to close the reschedule modal
function closeRescheduleModal() {
    const modal = document.getElementById('rescheduleModal');
    modal.style.display = 'none';
}

// Function to handle "Accept Appointment"
function acceptAppointment() {
    // Change status to Accepted
    const statusCell = event.target.closest('tr').querySelector('.status');
    statusCell.textContent = 'Accepted';
    statusCell.style.color = '#28a745'; // Green color to indicate acceptance
    
    // Hide buttons
    const buttons = event.target.closest('td').querySelectorAll('button');
    buttons.forEach(button => button.style.display = 'none');

    // Optionally, you can add a confirmation alert
    alert('Appointment has been accepted.');
}

// Function to handle rescheduling the appointment
document.querySelector('.submit-btn').addEventListener('click', function() {
    const newDate = document.getElementById('newDate').value;
    const newTime = document.getElementById('newTime').value;

    if (newDate && newTime) {
        alert(`Appointment has been rescheduled to ${newDate} at ${newTime}.`);
        closeRescheduleModal(); // Close the modal after rescheduling
    } else {
        alert('Please select both a new date and time.');
    }
});

// Close the modal when Cancel button is clicked
document.querySelector('.cancel-btn').addEventListener('click', function() {
    closeRescheduleModal(); // Simply close the modal without doing anything
});
