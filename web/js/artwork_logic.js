/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */

//* Setting up Enviroment
//! Taken from https://aframe.io/docs/1.2.0/introduction/javascript-events-dom-apis.html#removing-a-component-with-removeattribute

var sceneEl = document.querySelector('a-scene');
// $(document).ready(function() {
//     fb.read()
// });
var poses = pos;
var pos = [
    // 1
    {
        "x": -3.47685,
        "y": 1.42463,
        "z": -5.24289,
        "rotation1": 0,
        "rotation2": 0,
        "rotation3": 0,
    },
    // 2
    {
        "x": 0.8555,
        "y": 1.42463,
        "z": -5,
        "rotation1": 0,
        "rotation2": 0,
        "rotation3": 0,
    },
    // 3
    {
        "x": 3.2441,
        "y": 1.42463,
        "z": -5,
        "rotation1": 0,
        "rotation2": 0,
        "rotation3": 0,
    },
    // 4
    {
        "x": 4.93982,
        "y": 1.42463,
        "z": -3.790,
        "rotation1": 0,
        "rotation2": -90,
        "rotation3": 0,
    },
    // 5
    {
        "x": 4.93982,
        "y": 1.42463,
        "z": -1.46455,
        "rotation1": 0,
        "rotation2": -90,
        "rotation3": 0,
    },
    // 6
    {
        "x": 4.93982,
        "y": 1.42463,
        "z": 0.68738,
        "rotation1": 0,
        "rotation2": -90,
        "rotation3": 0,
    },
    // 7
    {
        "x": 4.93982,
        "y": 1.42463,
        "z": 2.98398,
        "rotation1": 0,
        "rotation2": -90,
        "rotation3": 0,
    },
    // 8
    {
        "x": -4.58145,
        "y": 1.4416,
        "z": 2.98398,
        "rotation1": 180,
        "rotation2": -90,
        "rotation3": 0,
    },
    // 9
    {
        "x": -4.58145,
        "y": 1.4416,
        "z": 0.51154,
        "rotation1": 180,
        "rotation2": -90,
        "rotation3": 0,
    },
    // 10
    {
        "x": -4.58145,
        "y": 1.4416,
        "z": -1.60922,
        "rotation1": 180,
        "rotation2": -90,
        "rotation3": 0,
    },
    // 11
    {
        "x": -4.58145,
        "y": 1.4416,
        "z": -3.67985,
        "rotation1": 180,
        "rotation2": -90,
        "rotation3": 0,
    },
]

let artWorkPositionsActual = []
    // let artWorkPositions = [-3.621, -2.136, -0.669, 0.988, 3.425]
    // let artworks = [{
    //     id: 1,
    //     author: "MJW",
    //     name: "This is a cool painting",
    // }, {
    //     id: 1,
    //     author: "MJW",
    //     name: "This is a cool painting",
    // }, {
    //     id: 1,
    //     author: "MJW",
    //     name: "This is a cool painting",
    // }, {
    //     id: 1,
    //     author: "MJW",
    //     name: "This is a cool painting",
    // }, {
    //     id: 1,
    //     author: "MJW",
    //     name: "This is a cool painting",
    // }, {
    //     id: 1,
    //     author: "MJW",
    //     name: "This is a cool painting",
    // }, {
    //     id: 1,
    //     author: "MJW",
    //     name: "This is a cool painting",
    // }, ]

let artworks = []
let artWork = {
    /**========================================================================
     **                           artWork.add
     *?  Pulls data from fb.read and transforms them into pieces of art.
     *@return n/a
     *========================================================================**/
    add: function() {
        let artObjec = {}
        artObjec.id = 1
        artObjec.src = 'google.com'
        artObjec.id = 1
        console.log('hello')
        let min = -3.733
        let max = 3.864
        let randomXPos = artWorkPositions[Math.floor(Math.random() * artWorkPositions.length + Math.random())];
        // console.log(artWorks[i].id.authorOfArt)
        sceneEl = document.getElementById('paintings');
        var planeId = document.createElement('a-plane');
        planeId.setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/dtec-artconnect.appspot.com/o/1631146051434-5ke8r7yahqg11.jpg?alt=media&token=3e413b8d-3799-409c-a729-cf6cc7362742');
        planeId.setAttribute('id', artObjec.id);
        planeId.setAttribute('color', '255,255,255');
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

    },
    create: function() {
        for (var i = 0; i < artworks.length; i++) {
            // var a = ["Roger", "Russell", "Clyde", "Egbert", "Clare", "Bobbie", "Simon", "Elizabeth", "Ted", "Caroline"];
            b = _.shuffle(pos).slice(0, 1);
            let ap = b;
            artworks[i].x = ap[0].x
            artworks[i].y = ap[0].y
            artworks[i].z = ap[0].z
            artworks[i].r1 = ap[0].rotation1
            artworks[i].r2 = ap[0].rotation2
            artworks[i].r3 = ap[0].rotation3
                // console.log(b.x);
        }
    },
    generate: function() {
        this.create();
        for (var i = 0; i < artworks.length; i++) {
            // console.log(artworks[i])
            sceneEl = document.getElementById('paintings');
            var planeId = document.createElement('a-plane');
            // planeId.setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/dtec-artconnect.appspot.com/o/1631146051434-5ke8r7yahqg11.jpg?alt=media&token=3e413b8d-3799-409c-a729-cf6cc7362742');
            planeId.setAttribute('id', artworks[i].id);
            planeId.setAttribute('src', artworks[i].url);
            // planeId.setAttribute('color', '255 255 ' + Math.floor(Math.random() * 255));
            console.log(artworks[i].id)
            planeId.setAttribute('class', 'generatedartwork');
            // let pos = randomXPos + ' 1.47 -4.4265'
            planeId.setAttribute('rotation', artworks[i].r1 + ' ' + artworks[i].r2 + ' ' + artworks[i].r3)
            planeId.setAttribute('position', artworks[i].x + ' ' + artworks[i].y + ' ' + artworks[i].z)
            sceneEl.appendChild(planeId);
        }
    }
}

function randomNoRepeats(array) {
    var copy = array.slice(0);
    return function() {
        if (copy.length < 1) { copy = array.slice(0); }
        var index = Math.floor(Math.random() * copy.length);
        var item = copy[index];
        copy.splice(index, 1);
        return item;
    };
}
/* 
1
<a-plane material="" geometry="" scale="1.63 1.94 0.00001" position="-3.47685 1.42463 -5.24289"></a-plane>
2
<a-plane src="#walls" wallbounds="" material="" geometry="" rotation="" scale="10.17 10.28 1" id="centerwall" position="0 0.73469 -5.33347"></a-plane>
3
<a-plane material="" geometry="" scale="1.63 1.94 0.00001" position="0.8555 1.42463 -5"></a-plane>
4
<a-plane material="" geometry="" scale="1.63 1.94 0.00001" position="3.2441 1.42463 -5"></a-plane>
5
<a-plane material="" geometry="" scale="1.63 1.94 0.00001" position="4.93982 1.42463 -3.79066" rotation="0 -90 0"></a-plane>
6
<a-plane material="" geometry="" scale="1.63 1.94 0.00001" position="4.89683 1.4416 -1.46455" rotation="0 -90 0"></a-plane>
7
<a-plane material="" geometry="" scale="1.63 1.94 0.00001" position="4.93982 1.42463 0.68738" rotation="0 -90 0"></a-plane>
8
<a-plane material="" geometry="" scale="1.63 1.94 0.00001" position="4.89683 1.4416 2.98398" rotation="0 -90 0"></a-plane>
9
<a-plane material="" geometry="" scale="1.63 1.94 0.00001" position="-4.58145 1.4416 2.98398" rotation="180 -90 0"></a-plane>
10
<a-plane material="" geometry="" scale="1.63 1.94 0.00001" position="-4.69199 1.42463 0.51154" rotation="180 -90 0"></a-plane>
11
<a-plane material="" geometry="" scale="1.63 1.94 0.00001" position="-4.58145 1.4416 -1.60922" rotation="180 -90 0"></a-plane>
12
<a-plane material="" geometry="" scale="1.63 1.94 0.00001" position="-4.69199 1.42463 -3.67985" rotation="180 -90 0"></a-plane>
*/