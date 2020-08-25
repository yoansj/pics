import firebase from 'firebase'

var firebaseConfig = {
    /* 
        Ain't nuthin to see here boi !
        What u lookin' at uh ?
        You wanted to see my firebaseConfig ?
        Well its not here so get out before I beat yo ass
    */
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

const database = firebaseApp.firestore();

export default database;