/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */

//* Setting up Enviroment
//! Taken from https://aframe.io/docs/1.2.0/introduction/javascript-events-dom-apis.html#removing-a-component-with-removeattribute

var sceneEl = document.querySelector('a-scene');
$(document).ready(function() {
    fb.read()
});

let artWorkPositionsActual = []
let artWorkPositions = [-3.621, -2.136, -0.669, 0.988, 3.425]

let artWork = {
    /**========================================================================
     **                           artWork.add
     *?  Pulls data from fb.read and transforms them into pieces of art.
     *@return n/a
     *========================================================================**/
    add: function(artObjec) {
        console.log('hello')
        let min = -3.733
        let max = 3.864
        let randomXPos = artWorkPositions[Math.floor(Math.random() * artWorkPositions.length + Math.random())];
        // console.log(artWorks[i].id.authorOfArt)
        sceneEl = document.getElementById('paintings');
        var planeId = document.createElement('a-plane');
        planeId.setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/dtec-artconnect.appspot.com/o/1631146051434-5ke8r7yahqg11.jpg?alt=media&token=3e413b8d-3799-409c-a729-cf6cc7362742');
        planeId.setAttribute('id', artObjec.id);
        console.log(artObjec.id)
        planeId.setAttribute('class', 'generatedartwork');
        let pos = randomXPos + ' 1.47 -4.4265'
        planeId.setAttribute('position', pos)
        sceneEl.appendChild(planeId);
        artWorkPositionsActual.push(parseFloat(pos))
            // Add in Artwork Info Plane
        var artWorkInfo = document.createElement('a-plane');
        artWorkInfo.setAttribute('id', artObjec.id + '-infoPlane');
        artWorkInfo.setAttribute('position', randomXPos + ' 0.613 -4.4265')
        artWorkInfo.setAttribute('scale', '1.56 0.49 1')
        artWorkInfo.setAttribute('material', 'color:  #987676')
        sceneEl.appendChild(artWorkInfo);
        // Add in Artwork Info Plane - Art Work nameOfArt
        var artWorkInfoArtName = document.createElement('a-text');
        artWorkInfoArtName.setAttribute('id', artObjec.id + '-infoPlane(artworkname)');
        artWorkInfoArtName.setAttribute('position', randomXPos + ' 0.683 -4.4265')
        artWorkInfoArtName.setAttribute('scale', '0.610 0.610 1')
        artWorkInfoArtName.setAttribute('text', 'anchor:  align;  align: center; width:  5;  value:' + artObjec.title)
        sceneEl.appendChild(artWorkInfoArtName);
        // Add in Artwork Info Plane - Art Work authorOfArt
        var artWorkInfoAuthorName = document.createElement('a-text');
        artWorkInfoAuthorName.setAttribute('id', artObjec.id + '-infoPlane(author)');
        artWorkInfoAuthorName.setAttribute('position', randomXPos + ' 0.53766 -4.4265')
        artWorkInfoAuthorName.setAttribute('scale', '0.63 0.610 1')
        artWorkInfoAuthorName.setAttribute('text', 'anchor:  align;  align: center; width:  5;  value: Created by ' + artObjec.author)
        sceneEl.appendChild(artWorkInfoAuthorName);

    }
}