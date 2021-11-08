/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */

let amountOfArt = 0;

var loginMixin = Swal.mixin({
    toast: true,
    icon: 'success',
    title: 'General Title',
    animation: false,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

var loadingMixin = Swal.mixin({
    toast: true,
    icon: 'info',
    title: 'General Title',
    animation: true,
    position: 'top-right',
    showConfirmButton: false,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});


/**============================================
 *               Regex's for Validation
 *=============================================**/
const textReg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
// numReg only passes numbers, nothing else + characters
const numReg = /^\d+$/;
// designed to check for emails
const emailReg = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
// this checks for white space, and a proper email address!
const nameReg = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;

let html = {
    update: function(_info1, _info2) {
        const USERHTML = document.getElementById('clientNAME')
        const USEREMAIL = document.getElementById('clientEMAIL')
        const AUTHCONTENT = document.getElementById('authContent')
        const USERICON = document.getElementById('userIcon')
        const USERAVATAR = document.getElementById('userAvatar')
        const LOGOUT = document.getElementById('logout')
        USERHTML.innerHTML = _info1.name
            // USEREMAIL.innerHTML = _info1.email
            // USERPRORFILEPIC.src = _info1.profileURL
            // generate posts automatically
        const POSTDOMELEMENT = document.getElementById("gallery");
        POSTDOMELEMENT.innerHTML = '';
        document.getElementById('bumper').style = 'display: none;'
        AUTHCONTENT.style = 'display: block;'
        USERICON.style = 'display: block;'
            // USERAVATAR.style = 'display: block;'
        LOGOUT.style = 'display: block;'
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
                        createPostCard(snapshot.val().title, snapshot.val().author, snapshot.val().url, snapshot.val().likes, snapshot.val().id);
                        amountOfArt = amountOfArt + 1;

                    })

                });

                console.log(posts)
                let cardContainer;

                let createPostCard = (_title, _name, _imgurl, _likes, _id) => {

                    let card = document.createElement('div');
                    card.className = _id;

                    let cardBody = document.createElement('div');
                    cardBody.className = 'gallery-item';
                    cardBody.tabIndex = 0

                    let image = document.createElement('div');
                    let imageContent = document.createElement('img')
                    imageContent.src = _imgurl;
                    imageContent.className = 'gallery-image';
                    image.appendChild(imageContent)

                    let name = document.createElement('div');
                    name.className = 'gallery-item-info';
                    let list = document.createElement('ul')
                    let listItem = document.createElement('li')
                    listItem.className = "gallery-item-likes"
                    listItem.innerHTML = "Title: " + _title
                    name.appendChild(list)
                    list.appendChild(listItem)


                    let editButton = document.createElement('button')
                    editButton.className = 'btn btn-primary'
                    editButton.innerText = 'Edit Post'
                    editButton.style = 'margin-top: 1%'
                    editButton.onclick = function() {
                        Swal.mixin({
                            input: 'text',
                            confirmButtonText: 'Next &rarr;',
                            showCancelButton: true,
                            progressSteps: ['1', '2']
                        }).queue([{
                                title: 'Post Title',
                                text: 'Please enter correct information'
                            },
                            'Author',
                        ]).then((result) => {
                            if (result.value) {
                                if (validate.text(result.value[0]) && validate.text(result.value[1])) {
                                    console.log(result.value)
                                    firebase.database().ref('users/' + client.uid + '/artwork/' + _id).update({
                                        title: result.value[0],
                                        author: result.value[1],
                                    });
                                    firebase.database().ref('artwork/' + client.uid + '-' + _id).update({
                                        title: result.value[0],
                                        author: result.value[1],
                                    });
                                    Swal.fire({
                                        title: 'Post Updated!',
                                        confirmButtonText: 'Lovely!'
                                    })
                                    html.update(client)
                                } else {
                                    Swal.fire({
                                        icon: 'warning',
                                        title: 'Error!',
                                        text: "Information was incorrectly entered",

                                    })
                                }
                            }
                        })
                    }

                    let deleteButton = document.createElement('button')
                    deleteButton.className = 'btn btn-danger'
                    deleteButton.innerText = 'Delete Post'
                    deleteButton.style = 'margin-top: 1%; margin-left: 1%'
                    deleteButton.onclick = function() {
                        firebase.database().ref('users/' + client.uid + '/artwork/' + _id).set({

                        });

                        firebase.database().ref('artwork/' + client.uid + '-' + _id).update({

                        });
                        alert.success("Deleted Post!", "deletedPost")
                        html.update(client)

                    };


                    cardBody.appendChild(image);
                    // cardBody.appendChild(title);
                    cardBody.appendChild(name);
                    // cardBody.appendChild(cardLikes)
                    cardBody.appendChild(editButton);
                    cardBody.appendChild(deleteButton);

                    card.appendChild(cardBody);
                    cardContainer.appendChild(card);

                }

                let initListOfTasks = () => {
                    if (cardContainer) {
                        document.getElementById('gallery').replaceWith(cardContainer);
                        return;
                    }

                    cardContainer = document.getElementById('gallery');
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
            document.getElementById('logincontent').style = 'display: none';
            document.getElementById('photo').style = 'display: none';
            document.getElementById('herebymistake').style = 'display: none';
            document.getElementById('register').style = 'display: block';
        } else if (_page == 'draw') {
            ptro.show();

        } else {
            document.getElementById(_page).style = 'display: block;'
                // docume
        }
    },
    hide: function(_page) {
        document.getElementById(_page).style = 'display: none;'
    }
}


// var ptro = Painterro({
//     saveHandler: function(image) {
//         download(image, 'testimage.jpg', "image/jpeg")
//     },
//     activeColor: '#00b400' // change active color to green
// });

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
        loginMixin.fire({
            animation: true,
            title: 'Signed in Successfully'
        });
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
    },
    /**========================================================================
     **                           Loading
     *?  Generates a loading alert (mostly used in auth processes)
     *========================================================================**/
    loading: function() {
        loadingMixin.fire({
            animation: true,
            title: 'Loading'
        });
    }
}

// validate shit

/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */


let editorInputs;
let editorOpen = false;


/**================================================================================================
 *                                         Validation Module
 *================================================================================================**/
let validate = {
    /**========================================================================
     **                           Text Validation
     *?   Checks a string with the textRegex and tests it
     *@param name type  
     *@param textReg regex  
     *@param _str string  
     *@return bool
     *========================================================================**/
    text: function(_str) {
        if (textReg.test(_str)) {
            // If string parsed through matches the nameReg-ex
            return true
                // return true
        } else {
            // else if it does not match
            return false
                // return false
        }
    },
    /**========================================================================
     **                           Name Vaildation
     *?   Checks a string with the nameRegex and tests it
     *@param name type  
     *@param name type  
     *@return type
     *========================================================================**/
    nameSpecfic: function(str) {
        if (nameReg.test(str)) {
            // If string parsed through matches the nameReg-ex
            return true
                // return true
        } else {
            // else if it does not match
            return false
                // return false    
        }
    },
    /*
  Function Name: num
  Purpose: Vaildating numeric input
  */
    num: function(str) {
        // Num vaildation
        if (numReg.test(str)) {
            // If string parsed through matches the numReg-ex
            return true
                // return true
        } else {
            // else if does not match
            return false
                // return false
        }
    },
    /*
  Function Name: email
  Purpose: Vaildating email input
  */
    email: function(str) {
        if (emailReg.test(str)) {
            return true;
        } else {
            return false
        }
    }
}