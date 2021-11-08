/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */

// some basic math...
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let fb_uploadHandler = {
    upload: function(_cameraUpload, _localURI) {
        // html variables
        let artName = document.getElementById('artworkname').value
        let artAuthor = document.getElementById('artworkauthor').value
        let artFile = document.querySelector("#artworkfile").files[0];

        // file url
        let artFileURL;
        if (_cameraUpload) {
            uploadImage(_localURI)
        } else {
            uploadImage(artFile)
        }

        async function uploadImage(_artFile) {
            alert.artwork()
            console.log('performing image upload')
            const ref = firebase.storage().ref();
            const file = _artFile
            const name = +new Date() + "-" + file.name;
            const metadata = {
                contentType: file.type
            };
            const task = ref.child(name).put(file, metadata);
            await task
                .then(snapshot => snapshot.ref.getDownloadURL())
                .then(url => {
                    console.log(url);
                    artFileURL = url;
                })
                // FETCH amount of work

            let newId = amountOfArt + 1;

            firebase.database().ref('users/' + client.uid + '/artwork/' + newId).update({
                title: artName,
                author: artAuthor,
                url: artFileURL,
                likes: 0,
                id: newId
            });


            firebase.database().ref('artwork/' + client.uid + '-' + newId).update({
                title: artName,
                author: artAuthor,
                url: artFileURL,
                likes: 0,
                id: newId
            });
            console.log('uploaded image')
            swal.close();
            alert.success("Successfully uploaded your art work!")
            ui.hide('uploadArtWork')
            ui.show('welcomePage')
            html.update(client)
        }

    }
}