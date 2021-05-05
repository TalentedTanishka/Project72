import firebase from 'firebase' 
require('@firebase/firestore')
const firebaseConfig = {
    apiKey: "AIzaSyDbn2aJ1EA9z2EahldGLjICcDkdhATLxPk",
    authDomain: "story-hub-aab71.firebaseapp.com",
    projectId: "story-hub-aab71",
    storageBucket: "story-hub-aab71.appspot.com",
    messagingSenderId: "326456823925",
    appId: "1:326456823925:web:02336d65b6845db2eea83c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();