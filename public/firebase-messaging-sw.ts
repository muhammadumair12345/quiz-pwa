importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.3/firebase-messaging.js');
import firebase from 'firebase';


firebase.initializeApp({
    apiKey: "AIzaSyBOZB_E3NNBrcnZLfvQFMhwkXsdg4KBJQM",
    authDomain: "expense-tracker-messaging.firebaseapp.com",
    projectId: "expense-tracker-messaging",
    storageBucket: "expense-tracker-messaging.appspot.com",
    messagingSenderId: "876499729609",
    appId: "1:876499729609:web:2c6545f64074df958fa118"
});

firebase.messaging();
