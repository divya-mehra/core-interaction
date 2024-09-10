//firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA_gWA8YJNSPimSUAH4R-15bw5gmAMQLA",
  authDomain: "songs-16fde.firebaseapp.com",
  projectId: "songs-16fde",
  storageBucket: "songs-16fde.appspot.com",
  messagingSenderId: "1053825342649",
  appId: "1:1053825342649:web:afe8e8ce7474943bc28f68",
  measurementId: "G-1WH8PB3SE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// show thank you message

function showThankYouMessage() {
    const thankYouElement = document.getElementById('thankYouMessage');
    // thankYouElement.textContent = "";
  }

// Submit data to Firestore
async function submitSong(song, artist) {
    try {
      const docRef = await addDoc(collection(db, "songs"), {
        songName: song,
        artistName: artist,
        timestamp: new Date()
      });
      console.log("Song submitted with ID: ", docRef.id);
      showThankYouMessage(); // Show thank you message on successful submission
    } catch (error) {
      console.error("Error submitting song: ", error);
    }
  }

// Example usage
submitSong("Song Title", "Artist Name");


// rest

document.getElementById('submitButton').addEventListener('click', () => {
    const song = document.getElementById('songInput').value;
    const artist = document.getElementById('artistInput').value;
    submitSong(song, artist);

  });
  