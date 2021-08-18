/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */

let loggedin;
let client;

let auth = {
    login: function() {
        firebase.auth().onAuthStateChanged(function(_user) {
            if (_user) {
                auth.handleSuccess(_user, _user.uid)
                console.log('already logged in...')
                loggedin = true;
            } else if (!_user) {
                if (_provider == google) {
                    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                        .then(function() {
                            provider = new firebase.auth.GoogleAuthProvider();
                            console.log("fb_auth | Starting Authentication process", "info")
                            return firebase.auth().signInWithPopup(provider).then(function(result) {
                                    var token = result.credential.accessToken;
                                    let fb_result = result.user;
                                    auth.handleSuccess(fb_result.uid, fb_result)
                                    console.log("auth.login | Authentication Process Successful", "info")
                                    loggedin = true;
                                    $('#landingPage').fadeOut();
                                })
                                .catch(function(error) {
                                    // Handle Errors here.
                                    var errorCode = error.code;
                                    var errorMessage = error.message;
                                    console.log("fb_auth | Error: " + errorMessage, "warn")
                                });
                        })
                }
            }
        });
    },
    handleSuccess: function(_userInformation, _userToken) {
        var db = firebase.database().ref('users/' + _userToken)
        db.once('value', (snapshot) => {
            if (snapshot.val() == null) {
                // store data to firebase
                console.log("fb_initUserData | User's first time on site, recording infomation!", "info")
                firebase.database().ref('users/' + _userToken).set({
                    name: _userInformation.displayName,
                    email: _userInformation.email,
                    profileURL: _userInformation.photoURL,
                    uid: _userToken,
                });
                let tokenParse = _userToken
                auth.handleSuccess(tokenParse)
            } else {
                const userData = snapshot.val();
                console.log("fb_initUserData | User has logged in before, no need to write more data", 'info')
                client = userData;
                let uid = client.uid
                html.update(client);
                ui.hide('login')
                ui.show('welcomePage')
            }
        });
    },
    logout: function() {
        firebase.auth().signOut().then(() => {
            console.log("You signed out!")
            location.reload();
        }).catch((error) => {
            console.log("We couldn't log you out, please try again'")
        });
    }
}