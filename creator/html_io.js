/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */

let amountOfArt = 0;

//* Ran on document load.
$(document).ready(function() {
    console.log("Gears are ticking!");
    $('#logincontent').fadeIn(1500);
});

//* Mix values for alerts when user logs in
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

/**========================================================================
 **                           HTML Module
 *?  Handles all HTML processess inside the program
 *@return none
 *========================================================================**/
let html = {
        /**==============================================
         **              Update
         *?  Handles all changes to the program when logged in, refreshes, etc
         *@return none
         *=============================================**/
        update: function(_info1, _info2) {
            // define elements in dom
            const USERHTML = document.getElementById('clientNAME')
            const USEREMAIL = document.getElementById('clientEMAIL')
            const AUTHCONTENT = document.getElementById('authContent')
            const USERICON = document.getElementById('userIcon')
            const USERAVATAR = document.getElementById('userAvatar')
            const LOGOUT = document.getElementById('logout')
            USERHTML.innerHTML = _info1.name
            const POSTDOMELEMENT = document.getElementById("gallery");
            POSTDOMELEMENT.innerHTML = '';
            document.getElementById('bumper').style = 'display: none;'
            AUTHCONTENT.style = 'display: block;'
            USERICON.style = 'display: block;'
            LOGOUT.style = 'display: block;'
            this.createCards()
        },
        /**==============================================
         **              Create Cards
         *?  Generates cards/posts for html elements
         *@return n/a
         *=============================================**/
        createCards: function() {
            // declare posts array
            var posts = [];
            // async
            fetchArtWork()


            async function fetchArtWork() {
                let db = firebase.database().ref("users/" + client.uid + '/artwork')
                var snapshot = await db.once('value');
                if (snapshot.exists()) {
                    db.get().then(function(childSnapshot) {

                        //* this is more elegant - check github vers for reference.
                        childSnapshot.forEach(function(snapshot) {
                            console.log(snapshot.val().name)
                            console.log(snapshot.val().storagename)
                            createPostCard(snapshot.val().title, snapshot.val().author, snapshot.val().url, snapshot.val().likes, snapshot.val().id, snapshot.val().storagename);
                            amountOfArt = amountOfArt + 1;

                        })

                    });
                    let cardContainer;
                    let createPostCard = (_title, _name, _imgurl, _likes, _id, _gs) => {
                        // generate card
                        let card = document.createElement('div');
                        card.className = _id;
                        // generate body
                        let cardBody = document.createElement('div');
                        cardBody.className = 'gallery-item';
                        cardBody.tabIndex = 0
                            // generate image
                        let image = document.createElement('div');
                        let imageContent = document.createElement('img')
                        imageContent.src = _imgurl;
                        imageContent.className = 'gallery-image';
                        image.appendChild(imageContent)
                            // hover component
                        let name = document.createElement('div');
                        name.className = 'gallery-item-info';
                        let list = document.createElement('ul')
                        let listItem = document.createElement('li')
                        listItem.className = "gallery-item-likes"
                        listItem.innerHTML = "Title: " + _title
                        name.appendChild(list)
                        list.appendChild(listItem)

                        // edit button
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

                        // delete button
                        let deleteButton = document.createElement('button')
                        deleteButton.className = 'btn btn-danger'
                        deleteButton.innerText = 'Delete Post'
                        deleteButton.style = 'margin-top: 1%; margin-left: 1%'
                        deleteButton.onclick = function() {
                            Swal.fire({
                                title: 'Are you sure?',
                                text: "You won't be able to revert this!",
                                icon: 'warning',
                                showCancelButton: true,
                                confirmButtonColor: '#3085d6',
                                cancelButtonColor: '#d33',
                                confirmButtonText: 'Yes, delete it!'
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    firebase.database().ref('users/' + client.uid + '/artwork/' + _id).set({

                                    });

                                    firebase.database().ref('artwork/' + client.uid + '-' + _id).update({

                                    });

                                    let ref = firebase.storage().ref();

                                    var imgGSRef = ref.child(_gs);

                                    imgGSRef.delete().then(() => {
                                        console.log("GS | Executed successfully")
                                    }).catch((error) => {
                                        console.log("GS | " + error)
                                    });
                                    html.update(client)
                                    Swal.fire(
                                        'Deleted!',
                                        'Your file has been deleted.',
                                        'success'
                                    )
                                }
                            })

                        };

                        // add it to html
                        cardBody.appendChild(image);
                        cardBody.appendChild(name);
                        cardBody.appendChild(editButton);
                        cardBody.appendChild(deleteButton);
                        // append to card body
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
    /**========================================================================
     **                           UI
     *?  Runs and operates all UI functions inside the program
     *@param name type
     *@param name type
     *@return type
     *========================================================================**/

let ui = {
    /**==============================================
     **              Show
     *?  Handles show events for sections
     *@return none
     *=============================================**/
    show: function(_page) {
        if (_page == 'form') {
            $('#welcomePage').fadeOut();
            $('#uploadArtWork').fadeIn();
            document.getElementById('artworkauthor').value = client.name
        } else {
            $('#' + _page).fadeIn();

        }
    },
    hide: function(_page) {
        $('#' + _page).fadeOut();

    }
}

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

// technically a copy from an old project, keeping here for future reference
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

$(function() {
    $("input:file").change(function() {
        var fileName = $(this).val();
        $(".filename").html(fileName);
        let privacyref = document.getElementById('privacyinfo-text')
        privacyref.innerHTML = ""


        console.log(fileName)
    });
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        let privacytextref = document.getElementById('privacyinfo-text')
        let privacy = document.getElementById('privacynfo')
        privacytextref.innerHTML = ""
        privacy.style.paddingTop = 0
        reader.onload = function(e) {
            $('#blah')
                .attr('src', e.target.result)
                .width(526)
                .height(526);
        };

        reader.readAsDataURL(input.files[0]);
        $('#blah').fadeIn()
    }
}