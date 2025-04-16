const patients = {
    101: { name: "Wong Jing Ming", matricID: "123321", age: 22, contact: "012-3456789", address: "123 Street, City" },
    102: { name: "Za'im Qody", matricID: "145541", age: 23, contact: "013-9876543", address: "456 Avenue, City" },
    103: { name: "Ahmad Peja", matricID: "169961", age: 21, contact: "014-2233445", address: "789 Boulevard, City" }
};

const modal = document.getElementById("patientModal");
const medicalRecordModal = document.getElementById("medicalRecordModal");
const updateRecordModal = document.getElementById("updateRecordModal");

const modalContent = document.getElementById("patientDetails");
const medicalRecordContent = document.getElementById("medicalRecordDetails");
const updateRecordContent = document.getElementById("updateRecordForm");

const closeModal = document.querySelectorAll(".close");

document.querySelectorAll(".view-details-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const id = e.target.getAttribute("data-id");
        const patient = patients[id];
        modalContent.innerHTML = `
            <p><strong>Name:</strong> ${patient.name}</p>
            <p><strong>Matric ID:</strong> ${patient.matricID}</p>
            <p><strong>Age:</strong> ${patient.age}</p>
            <p><strong>Contact:</strong> ${patient.contact}</p>
            <p><strong>Address:</strong> ${patient.address}</p>
        `;
        modal.style.display = "flex";
    });
});
 
// View Medical Records button event listener
document.querySelectorAll(".view-medical-records-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const patientId = e.target.getAttribute("data-id");
        console.log("View Medical Records for patient ID:", patientId); // Debugging
        const patient = patients[patientId];
        medicalRecordContent.innerHTML = `
            <h3>Medical Record for ${patient.name}</h3>
            <p><strong>Record:</strong> No current records. </p>
        `;
        medicalRecordModal.style.display = "flex"; // Show medical record modal
    });
});

// Update Medical Record Book button event listener
document.querySelectorAll(".update-medical-record-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const patientId = e.target.getAttribute("data-id");
        console.log("Upload Appointment Report for Patient: ", patientId); // Debugging
        const patient = patients[patientId];
        updateRecordContent.innerHTML = `
            <h3>Update Medical Record for ${patient.name}</h3>
            <form>
                <label for="medicalRecordFile">Upload Appointment Report (PDF):</label>
                <input type="file" id="medicalRecordFile" accept=".pdf" />
                <button type="submit" class="save-changes-btn">Save Changes</button>
            </form>
        `;
        updateRecordModal.style.display = "flex"; // Show update medical record modal
    });
});

// Close all modals
closeModal.forEach((btn) => {
    btn.addEventListener("click", () => {
        modal.style.display = "none";
        medicalRecordModal.style.display = "none";
        updateRecordModal.style.display = "none";
    });
});

// Close modals when clicking outside
window.addEventListener("click", (e) => {
    if (e.target == modal || e.target == medicalRecordModal || e.target == updateRecordModal) {
        modal.style.display = "none";
        medicalRecordModal.style.display = "none";
        updateRecordModal.style.display = "none";
    }
});
