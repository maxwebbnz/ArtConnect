/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */


//*Declearing variables for file...
let loggedin;
let client;

/**========================================================================
 **                           Auth Module
 *?  Contains all modules regarding authentication for the program
 *@return type
 *========================================================================**/
let auth = {
    /**==============================================
     **              Login
     *?  Logs in the user
     *@return n/a
     *=============================================**/
    login: function() {
        // start the process
        alert.loading()
        firebase.auth().onAuthStateChanged(function(user) {
            // check if user is already authenticated
            if (user) {
                console.log("User is logged in already")

                auth.handleSuccess(user, user.uid)
                loggedin = true
            } else {
                // if not logged in, perform logicial actions to do so
                console.log("Is not logged in")
                firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                    .then(function() {
                        provider = new firebase.auth.GoogleAuthProvider();
                        console.log("fb_auth | Starting Authentication process", "info")
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
                            // handle the success....
                            auth.handleSuccess(user, user.uid)
                            swal.close()
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
    /**==============================================
     **              Handle Success
     *?  Turns raw google information and performs tasks to log in user locally
     *@return n/a
     *=============================================**/
    handleSuccess: function(_userInformation, _userToken) {
        // ref db
        var db = firebase.database().ref('users/' + _userToken)
        db.once('value', (snapshot) => {
            // no user yet
            if (snapshot.val() == null) {
                // store data to firebase
                console.log("fb_initUserData | User's first time on site, recording infomation!", "info")
                console.log(_userToken)
                    // store base info
                firebase.database().ref('users/' + _userToken).set({
                    name: _userInformation.displayName,
                    email: _userInformation.email,
                    profileURL: _userInformation.photoURL,
                    uid: _userToken,
                });
                // restart process to contuine program
                let tokenParse = _userToken
                client = _userInformation;
                console.log(client)
                this.handleSuccess(client, tokenParse)
                    // if user is already registered **or has just been registered
            } else {
                const userData = snapshot.val();
                console.log("fb_initUserData | User has logged in before, no need to write more data", 'info')
                client = userData;
                let uid = client.uid
                    // start program
                html.update(client);
                ui.hide('login')
                document.getElementById('photo').style = 'display: none';

                ui.show('welcomePage')
                alert.authSuccess()
            }
        });
    },
    /**==============================================
     **              Logout
     *?  Logs out the user
     *@return n/a
     *=============================================**/
    logout: function() {
        firebase.auth().signOut().then(() => {
            console.log("You signed out!")
            location.reload();
        }).catch((error) => {
            alert.warn(error, error.message)
            console.log("We couldn't log you out, please try again'")
        });
    }
}