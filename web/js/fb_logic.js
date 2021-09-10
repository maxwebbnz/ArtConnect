/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */

//* Base Variable Definitions
let artWorks = [];
let id = 'id'

/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */

let fb = {}

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBDX8i-zyw4lRzXwTchnzIBNMyd8vJfwxM",
    authDomain: "dtec-artconnect.firebaseapp.com",
    projectId: "dtec-artconnect",
    storageBucket: "dtec-artconnect.appspot.com",
    messagingSenderId: "316146994859",
    appId: "1:316146994859:web:dda34713c7ce03124d31ee"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firebase
$(document).ready(function() {})
    /**========================================================================
     **                           fb.read
     *?  firebase read function that should be generalised

     *@return n/a
     *========================================================================**/
fb.read = function() {
    var galDBRoot = firebase.database().ref('artwork/').orderByChild('name');
    galDBRoot.once('value').then(
        (_snapshot) => {
            _snapshot.forEach(function(childSnapshot) {

                let artObject = {
                        "title": childSnapshot.child("title").val(),
                        "author": childSnapshot.child("author").val(),
                        "url": childSnapshot.child('url').val(),
                        "likes": childSnapshot.child('likes').val(),
                        "id": childSnapshot.key,
                    }
                    // console.log(artObject)
                artWork.add(artObject)
            })
        });

}