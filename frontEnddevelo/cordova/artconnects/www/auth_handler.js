/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */

let loggedin;
let client;

let auth = {
    login: function() {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                auth.handleSuccess(user, user.uid)
                loggedin = true
            } else {
                firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                    .then(function() {
                        provider = new firebase.auth.GoogleAuthProvider();
                        console.log("fb_auth | Starting Authentication process", "info")
                        firebase.auth().signInWithRedirect(provider).then(() => {
                            return firebase.auth().getRedirectResult();
                        }).then((result) => {
                            /** @type {firebase.auth.OAuthCredential} */
                            var credential = result.credential;

                            // This gives you a Google Access Token.
                            // You can use it to access the Google API.
                            var token = credential.accessToken;
                            // The signed-in user info.
                            var user = result.user;
                            auth.handleSuccess(user, user.uid)
                            console.log(user)
                        }).catch((error) => {
                            // Handle Errors here.
                            var errorCode = error.code;
                            var errorMessage = error.message;
                            alert.warn(error, errorMessage)
                        });
                    })
            }
        });

    },
    handleSuccess: function(_userInformation, _userToken) {
        var db = firebase.database().ref('users/' + _userToken)
        db.once('value', (snapshot) => {
            if (snapshot.val() == null) {
                // store data to firebase
                console.log("fb_initUserData | User's first time on site, recording infomation!", "info")
                console.log(_userToken)
                firebase.database().ref('users/' + _userToken).set({
                    name: _userInformation.displayName,
                    email: _userInformation.email,
                    profileURL: _userInformation.photoURL,
                    uid: _userToken,
                });
                let tokenParse = _userToken
                client = _userInformation;
                let uid = client.uid
                html.update(client);
                ui.hide('login')
                ui.show('welcomePage')
                alert.authSuccess()
            } else {
                const userData = snapshot.val();
                console.log("fb_initUserData | User has logged in before, no need to write more data", 'info')
                client = userData;
                let uid = client.uid
                html.update(client);
                ui.hide('login')
                ui.show('welcomePage')
                alert.authSuccess()
            }
        });
    },
    logout: function() {
        firebase.auth().signOut().then(() => {
            console.log("You signed out!")
            location.reload();
        }).catch((error) => {
            alert.warn(error, error.message)
            console.log("We couldn't log you out, please try again'")
        });
    },
    registerWithEmail: function() {
        let name = document.getElementById('clientname').value
        let email = document.getElementById('clientemail').value
        let password = document.getElementById('clientpassword').value

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                auth.handleSuccess(user.uid, user)
                console.log(user)

                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert.warn(error, error.message)

            });

    },
    loginWithEmail: function() {
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                console.log(user)

                auth.handleSuccess(user.uid, user)

                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                alert.warn(error, error.message)
                console.log(error)
            });

    }
}

function cordovaSignInRedirect(provider) {
    // [START auth_cordova_sign_in_redirect]
    firebase.auth().signInWithPopup(provider).then(() => {
        return firebase.auth().getRedirectResult();
    }).then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token.
        // You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
    }).catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert.warn(error, error.message)

    });
    // [END auth_cordova_sign_in_redirect]
}