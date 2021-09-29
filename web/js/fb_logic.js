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
const firebaseConfig = {
    apiKey: "AIzaSyCwUCj8BlAvkunaxiYRBwEFMMtcCsR_gXQ",
    authDomain: "comp-artconnect.firebaseapp.com",
    projectId: "comp-artconnect",
    storageBucket: "comp-artconnect.appspot.com",
    messagingSenderId: "449303672491",
    appId: "1:449303672491:web:5209f8c0bce0a3ab51e9ee"
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
                artworks.push(artObject)
                console.log(artworks)
            })
        });

}