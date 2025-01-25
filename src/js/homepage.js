console.log('homepage.js loaded');

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDHbWq0K9XIbZ17qcTMTC7OIbZv487hoFI",
    authDomain: "medimate-8ae30.firebaseapp.com",
    projectId: "medimate-8ae30",
    storageBucket: "medimate-8ae30.firebasestorage.app",
    messagingSenderId: "348584087460",
    appId: "1:348584087460:web:0d4ec3ce4e8265ec01fb31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

onAuthStateChanged(auth, (user) => {
    const loggedInUserId = localStorage.getItem('loggedInUserId');
    if (loggedInUserId) {S
        console.log(user);
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
            .then((docSnap) => {
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    document.getElementById('loggedUserFName').innerText = userData.firstName;
                    document.getElementById('loggedUserEmail').innerText = userData.email;
                    document.getElementById('loggedUserLName').innerText = userData.lastName;
                } else {
                    console.log("No document found matching id");
                }
            })
            .catch((error) => {
                console.log("Error getting document");
            });
    } else {
        console.log("User Id not Found in Local storage");
    }
});

const logoutButton = document.getElementById('logoutButton');

if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        signOut(auth)
            .then(() => {
                localStorage.removeItem('loggedInUserId');
                window.location.href = 'index.html';
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    const profileImage = document.getElementById('profileImage');
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (!profileImage) {
        console.error('Profile image not found');
    }
    if (!dropdownMenu) {
        console.error('Dropdown menu not found');
    }

    profileImage.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log('Profile image clicked');
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    window.addEventListener('click', () => {
        dropdownMenu.style.display = 'none';
    });
});