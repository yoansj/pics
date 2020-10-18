import firebase from 'firebase'

var firebaseConfig = {
    /* 
        Nothing to read here
        Were you expecting something ?
        Sorry for the disappointment
        Read Berserk
    */
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebaseApp.firestore();

export default database;