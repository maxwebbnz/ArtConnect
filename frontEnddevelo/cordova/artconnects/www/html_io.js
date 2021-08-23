/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */

let amountOfArt = 0;

let html = {
    update: function(_info1, _info2) {
        const USERHTML = document.getElementById('clientNAME')
        const USEREMAIL = document.getElementById('clientEMAIL')
        const USERPRORFILEPIC = document.getElementById('clientPROFILEPIC')
        USERHTML.innerHTML = _info1.name
            // USEREMAIL.innerHTML = _info1.email
            // USERPRORFILEPIC.src = _info1.profileURL
            // generate posts automatically
        this.createCards()

    },
    createCards: function() {
        var posts = [];

        fetchArtWork()

        async function fetchArtWork() {
            let db = firebase.database().ref("users/" + client.uid + '/artwork')
            var snapshot = await db.once('value');
            if (snapshot.exists()) {
                db.get().then(function(childSnapshot) {
                    let artWorkArray = childSnapshot.val()
                    console.log(artWorkArray)
                    console.log(childSnapshot.numChildren())
                    for (var i = 0; i < childSnapshot.numChildren(); i++) {
                        console.log('created card')
                        createPostCard(artWorkArray[i]);
                        console.log(artWorkArray[i])
                        amountOfArt = amountOfArt + 1;
                    }
                });

                console.log(posts)
                let cardContainer;

                let createPostCard = (task) => {

                    let card = document.createElement('div');
                    card.className = 'card shadow cursor-pointer';

                    let cardBody = document.createElement('div');
                    cardBody.className = 'card-body';

                    let title = document.createElement('h5');
                    title.innerText = "Title: " + task.title;
                    title.className = 'card-title';

                    let name = document.createElement('div');
                    name.innerText = "Created by: " + task.name;
                    name.className = 'card-name';


                    let image = document.createElement('img');
                    image.src = task.url;
                    image.className = 'card-image';

                    cardBody.appendChild(image);
                    cardBody.appendChild(title);
                    cardBody.appendChild(name);

                    card.appendChild(cardBody);
                    cardContainer.appendChild(card);

                }

                let initListOfTasks = () => {
                    if (cardContainer) {
                        document.getElementById('card-container').replaceWith(cardContainer);
                        return;
                    }

                    cardContainer = document.getElementById('card-container');
                    posts.forEach((posts) => {
                        console.log('ran init')
                        createPostCard(posts);
                    });
                };
                initListOfTasks();

            }

        }


    }
}
let ui = {
    show: function(_page) {
        if (_page == 'form') {
            document.getElementById('welcomePage').style = 'display: none';
            document.getElementById('uploadArtWork').style = 'display: block';
            document.getElementById('artworkauthor').value = client.name
        } else if (_page == 'register') {
            document.getElementById('login').style = 'display: none';
            document.getElementById('register').style = 'display: block';
        } else {
            document.getElementById(_page).style = 'display: block;'
        }
    },
    hide: function(_page) {
        document.getElementById(_page).style = 'display: none;'
    }
}

/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */
/**========================================================================
 *                           Alert Module
 *========================================================================**/

let alert = {
    /**========================================================================
     **                           Warning
     *?  Gets warning information from the function, and displays it.
     *@param name type  
     *@param _error string
     *@param _errorcode intger
     *@return n/a
     *========================================================================**/
    warn: function(_error, _errorcode) {
        console.log("alert.warn | Displayed warning with error of: " + _error, 'info')
        Swal.fire({
            icon: 'warning',
            title: 'Warning',
            text: _error,
        })
    },
    /**========================================================================
     **                           Error
     *?  Gets error information from a function, and displays it.
     *@param name type  
     *@param _error string
     *@param _errorcode intger
     *@return n/a
     *========================================================================**/
    error: function(_error, _errorcode) {
        console.log("alert.error | Displayed error with error of: " + _error, 'info')
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: _error,
        })
    },
    /**========================================================================
     **                           Success
     *?  Gets success information from a function, and displays it.
     *@param name type  
     *@param _info string
     *@param _errorcode intger
     *@return n/a
     *========================================================================**/
    success: function(_info, _errorcode) {
        console.log("alert.success | Displayed success with value of: " + _info, 'info')
        Swal.fire({
            icon: 'success',
            title: 'Success!',
            text: _info,
        })
    },
    /**========================================================================
     **                           Success Authed
     *?  Gets success information from the auth function, and displays it.
     *@param name type  
     *@param _info string
     *@param _errorcode intger
     *@return n/a
     *========================================================================**/
    authSuccess: function() {
        console.log("alert.authSuccess | User Successfully logged in, now showing success information", 'info')
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Woohoo! You logged in!',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1600
        })
    },
    /**========================================================================
     **                           Success Dismissed
     *?  Gets success information from any function, and displays it then automatically dismissed it.
     *@param name type  
     *@param name type  
     *@return type
     *========================================================================**/
    successDismissed: function(_info) {
        console.log("alert.successDismissed | Displayed success with value of: " + _info, 'info')
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Success!',
            text: _info,
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 1600
        })
    },
    /**========================================================================
     **                           Uploading Art Work
     *?  Generates a loading alert (mostly used in auth processes)
     *========================================================================**/
    artwork: function() {
        Swal.fire({
            position: 'center',
            title: 'Uploading Artwork',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 100000
        })
    }
}