/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */

// some basic math...
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
let fb_uploadHandler = {
    upload: function() {
        // html variables
        let artName = document.getElementById('artworkname').value
        let artAuthor = document.getElementById('artworkauthor').value
        let artFile = document.querySelector("#photo").files[0];

        // file url
        let artFileURL;
        uploadImage(artFile)

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

            let id = amountOfArt;

            firebase.database().ref('users/' + client.uid + '/artwork/' + id).update({
                title: artName,
                name: artAuthor,
                url: artFileURL,
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