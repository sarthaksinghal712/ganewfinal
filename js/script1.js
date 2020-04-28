// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBhwkC8sNb2d18od8ckeI0WSt5unfx1VUY",
    authDomain: "glocalamitians.firebaseapp.com",
    databaseURL: "https://glocalamitians.firebaseio.com",
    projectId: "glocalamitians",
    storageBucket: "glocalamitians.appspot.com",
    messagingSenderId: "318956515493",
    appId: "1:318956515493:web:5b3a2540ccf37ee47e1d4c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function log() {
    email = $("#email").val()
    password = $("#pass").val()
    alert(email + " " + password)
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {

        var errorCode = error.code;
        var errorMessage = error.message;

    });
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {

        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;

    }
});