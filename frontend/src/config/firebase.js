import firebase from "firebase";

firebase.initializeApp({
    apiKey: 
    authDomain: 
});

export const firebaseConfig = {
    signInFlow: "popup",
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
        signInSuccess: () => false
    }
};

export const signout = () => {
    firebase.auth().signout();
}

export default {firebaseConfig, signout};
