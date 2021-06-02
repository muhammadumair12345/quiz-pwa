import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBOZB_E3NNBrcnZLfvQFMhwkXsdg4KBJQM",
  authDomain: "expense-tracker-messaging.firebaseapp.com",
  projectId: "expense-tracker-messaging",
  storageBucket: "expense-tracker-messaging.appspot.com",
  messagingSenderId: "876499729609",
  appId: "1:876499729609:web:2c6545f64074df958fa118"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;