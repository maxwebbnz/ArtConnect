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