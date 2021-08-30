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
        const POSTDOMELEMENT = document.getElementById("card-container");
        POSTDOMELEMENT.innerHTML = '';
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
                    // let artWorkArray = childSnapshot.val()
                    // console.log(artWorkArray)
                    // console.log(childSnapshot.numChildren())
                    // let amountOfPosts = childSnapshot.numChildren()
                    // if (amountOfPosts === 1) {
                    //     createPostCard(artWorkArray[0], 0);
                    //     amountOfArt = amountOfArt + 1;

                    // } else {
                    //     for (var i = 0; i < amountOfPosts; i++) {
                    //         console.log('created card')
                    //         createPostCard(artWorkArray[i], i);
                    //         console.log(artWorkArray[i])
                    //         amountOfArt = amountOfArt + 1;
                    //     }
                    // }

                    //* this is more elegant!
                    childSnapshot.forEach(function(snapshot) {
                        console.log(snapshot.val().name)
                        createPostCard(snapshot.val().title, snapshot.val().name, snapshot.val().url, snapshot.val().id);
                        amountOfArt = amountOfArt + 1;

                    })

                });

                console.log(posts)
                let cardContainer;

                let createPostCard = (_title, _name, _imgurl, _id) => {

                    let card = document.createElement('div');
                    card.className = 'card';

                    let cardBody = document.createElement('div');
                    cardBody.className = 'card-body';

                    let title = document.createElement('h5');
                    title.innerText = "Title: " + _title;
                    title.className = 'card-title';
                    title.style = 'margin-top: 1%;'

                    let divide = document.createElement("HR");

                    let name = document.createElement('div');
                    name.innerText = "Created by: " + _name;
                    name.className = 'card-text';


                    let image = document.createElement('img');
                    image.src = _imgurl;
                    image.className = 'card-img-top ';

                    let editButton = document.createElement('button')
                    editButton.className = 'btn btn-primary'
                    editButton.innerText = 'Edit Post'
                    editButton.style = 'margin-top: 1%'
                    editButton.onclick = function() {
                        console.log("Edit post")
                    };

                    let deleteButton = document.createElement('button')
                    deleteButton.className = 'btn btn-danger'
                    deleteButton.innerText = 'Delete Post'
                    deleteButton.style = 'margin-top: 1%; margin-left: 1%'
                    deleteButton.onclick = function() {
                        firebase.database().ref('users/' + client.uid + '/artwork/' + _id).set({

                        });
                    };

                    // editButton.onclick(console.log('hi'))

                    cardBody.appendChild(image);
                    cardBody.appendChild(title);
                    cardBody.appendChild(name);
                    cardBody.appendChild(divide);
                    cardBody.appendChild(editButton);
                    cardBody.appendChild(deleteButton);

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

            } else {
                document.getElementById('bumper').style = 'display: block;'
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