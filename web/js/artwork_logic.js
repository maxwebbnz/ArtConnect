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
        "x": -4.53216 + 0.8555,
        "y": 1.42463,
        "z": -5,
        "s1": 1.630,
        "s2": 1.950,
        "s3": 0,
        "rotation1": 0,
        "rotation2": 0,
        "rotation3": 0,
        "tittlex": 0.438,
        "titley": 2.626,
        "titlez": -5.000,
        "titles1": 0.790,
        "titles2": 0.970,
        "titles3": 0,
        "likex": 0.258,
        "likey": 0.242,
        "likez": -5.000,
        "likess1": 0.780,
        "likess2": 0.900,
        "likess3": 0,

    },
    // 1
    {
        "x": -0.75,
        "y": 1.42463,
        "z": -5,
        "s1": 1.630,
        "s2": 1.950,
        "s3": 0,
        "rotation1": 0,
        "rotation2": 0,
        "rotation3": 0,
        "tittlex": -0.75,
        "titley": 2.626,
        "titlez": -5.000,
        "titles1": 0.790,
        "titles2": 0.970,
        "titles3": 0,
        "likex": 0.258,
        "likey": 0.242,
        "likez": -5.000,
        "likess1": 0.780,
        "likess2": 0.900,
        "likess3": 0,

    },
    // 1
    {
        "x": 3.08,
        "y": 1.42463,
        "z": -5,
        "s1": 1.630,
        "s2": 1.950,
        "s3": 0,
        "rotation1": 0,
        "rotation2": 0,
        "rotation3": 0,
        "tittlex": 3.08,
        "titley": 2.626,
        "titlez": -5.000,
        "titles1": 0.790,
        "titles2": 0.970,
        "titles3": 0,
        "likex": 0.258,
        "likey": 0.242,
        "likez": -5.000,
        "likess1": 0.780,
        "likess2": 0.900,
        "likess3": 0,

    },
    // 1
    {
        "x": 1.19,
        "y": 1.42463,
        "z": -5,
        "s1": 1.630,
        "s2": 1.950,
        "s3": 0,
        "rotation1": 0,
        "rotation2": 0,
        "rotation3": 0,
        "tittlex": 1.19,
        "titley": 2.626,
        "titlez": -5.000,
        "titles1": 0.790,
        "titles2": 0.970,
        "titles3": 0,
        "likex": 0.258,
        "likey": 0.242,
        "likez": -5.000,
        "likess1": 0.780,
        "likess2": 0.900,
        "likess3": 0,

    },
    // 1
    {
        "x": 0.40835,
        "y": 1.42463,
        "z": 4.59516,
        "s1": 1.630,
        "s2": 1.950,
        "s3": 0,
        "rotation1": 0,
        "rotation2": 90,
        "rotation3": 0,
        "tittlex": 0.40835,
        "titley": 2.626,
        "titlez": 4.59516,
        "titles1": 0.790,
        "titles2": 0.970,
        "titles3": 0,
        "likex": 0.258,
        "likey": 0.242,
        "likez": -5.000,
        "likess1": 0.780,
        "likess2": 0.900,
        "likess3": 0,

    },
    // 1
    {
        "x": -5.003,
        "y": 1.42463,
        "z": 2.59311,
        "s1": 1.630,
        "s2": 1.950,
        "s3": 0,
        "rotation1": 0,
        "rotation2": 0 + 90,
        "rotation3": 0,
        "tittlex": -5.003,
        "titley": 2.626,
        "titlez": 2.59311,
        "titles1": 0.790,
        "titles2": 0.970,
        "titles3": 0,
        "likex": 0.258,
        "likey": 0.242,
        "likez": -5.000,
        "likess1": 0.780,
        "likess2": 0.900,
        "likess3": 0,

    },
    // 1
    {
        "x": -5.003,
        "y": 1.42463,
        "z": 0.68662,
        "s1": 1.630,
        "s2": 1.950,
        "s3": 0,
        "rotation1": 0,
        "rotation2": 0 + 90,
        "rotation3": 0,
        "tittlex": -5.003,
        "titley": 2.626,
        "titlez": 0.68662,
        "titles1": 0.790,
        "titles2": 0.970,
        "titles3": 0,
        "likex": 0.258,
        "likey": 0.242,
        "likez": -5.000,
        "likess1": 0.780,
        "likess2": 0.900,
        "likess3": 0,

    },
    // 1
    {
        "x": -5.003,
        "y": 1.42463,
        "z": -1.32673,
        "s1": 1.630,
        "s2": 1.950,
        "s3": 0,
        "rotation1": 0,
        "rotation2": 0 + 90,
        "rotation3": 0,
        "tittlex": -5.003,
        "titley": 2.626,
        "titlez": -1.32673,
        "titles1": 0.790,
        "titles2": 0.970,
        "titles3": 0,
        "likex": 0.258,
        "likey": 0.242,
        "likez": -5.000,
        "likess1": 0.780,
        "likess2": 0.900,
        "likess3": 0,

    },
    // 1
    {
        "x": -5.003,
        "y": 1.42463,
        "z": -3.18683,
        "s1": 1.630,
        "s2": 1.950,
        "s3": 0,
        "rotation1": 0,
        "rotation2": 0 + 90,
        "rotation3": 0,
        "tittlex": -5.003,
        "titley": 2.626,
        "titlez": -3.18683,
        "titles1": 0.790,
        "titles2": 0.970,
        "titles3": 0,
        "likex": 0.258,
        "likey": 0.242,
        "likez": -3.18683,
        "likess1": 0.780,
        "likess2": 0.900,
        "likess3": 0,

    },
    // 1
    {
        "x": 4.993,
        "y": 1.42463,
        "z": 2.5593,
        "s1": 1.630,
        "s2": 1.950,
        "s3": 0,
        "rotation1": 0,
        "rotation2": 0 + -90,
        "rotation3": 0,
        "tittlex": 4.993,
        "titley": 2.626,
        "titlez": 2.5593,
        "titles1": 0.790,
        "titles2": 0.970,
        "titles3": 0,
        "likex": 0.258,
        "likey": 0.242,
        "likez": -5.000,
        "likess1": 0.780,
        "likess2": 0.900,
        "likess3": 0,

    },
    // 1
    {
        "x": 4.993,
        "y": 1.42463,
        "z": 0.72214,
        "s1": 1.630,
        "s2": 1.950,
        "s3": 0,
        "rotation1": 0,
        "rotation2": 0 + -90,
        "rotation3": 0,
        "tittlex": 4.993,
        "titley": 2.626,
        "titlez": 0.72214,
        "titles1": 0.790,
        "titles2": 0.970,
        "titles3": 0,
        "likex": 4.993,
        "likey": 0.242,
        "likez": 0.72214,
        "likess1": 0.780,
        "likess2": 0.900,
        "likess3": 0,

    },
    // 1
    {
        "x": 4.993,
        "y": 1.42463,
        "z": -1.09021,
        "s1": 1.630,
        "s2": 1.950,
        "s3": 0,
        "rotation1": 0,
        "rotation2": 0 + -90,
        "rotation3": 0,
        "tittlex": 4.993,
        "titley": 2.626,
        "titlez": -1.09021,
        "titles1": 0.790,
        "titles2": 0.970,
        "titles3": 0,
        "likex": 4.993,
        "likey": 0.242,
        "likez": -1.09021,
        "likess1": 0.780,
        "likess2": 0.900,
        "likess3": 0,

    },
    // 1
    {
        "x": 4.993,
        "y": 1.42463,
        "z": -2.95357,
        "s1": 1.630,
        "s2": 1.950,
        "s3": 0,
        "rotation1": 0,
        "rotation2": 0 + -90,
        "rotation3": 0,
        "tittlex": 4.993,
        "titley": 2.626,
        "titlez": -2.95357,
        "titles1": 0.790,
        "titles2": 0.970,
        "titles3": 0,
        "likex": 4.993,
        "likey": 0.242,
        "likez": -2.95357,
        "likess1": 0.780,
        "likess2": 0.900,
        "likess3": 0,

    },
    // 1
    {
        "x": 4.993,
        "y": 1.42463,
        "z": -3.984,
        "s1": 1.630,
        "s2": 1.950,
        "s3": 0,
        "rotation1": 0,
        "rotation2": 0 + -90,
        "rotation3": 0,
        "tittlex": 4.993,
        "titley": 2.626,
        "titlez": -4.77154,
        "titles1": 0.790,
        "titles2": 0.970,
        "titles3": 0,
        "likex": 4.993,
        "likey": 0.242,
        "likez": -4.77154,
        "likess1": 0.780,
        "likess2": 0.900,
        "likess3": 0,

    }

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
                // artworks[i].x = pos[2].x
                // artworks[i].y = pos[2].y
                // artworks[i].z = pos[2].z
            artworks[i].r1 = ap[0].rotation1
            artworks[i].r2 = ap[0].rotation2
            artworks[i].r3 = ap[0].rotation3
            artworks[i].titles1 = ap[0].titles1
            artworks[i].titles2 = ap[0].titles2
            artworks[i].titles3 = ap[0].titles3
            artworks[i].titlex = ap[0].tittlex
            artworks[i].titley = ap[0].titley
            artworks[i].titlez = ap[0].titlez
            artworks[i].likey = ap[0].likey

            // artworks[i].r1 = pos[0].rotation1
            // artworks[i].r2 = pos[0].rotation2
            // artworks[i].r3 = pos[0].rotation3
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
            console.log(artworks[i])
            planeId.setAttribute('class', 'generatedartwork');
            // let pos = randomXPos + ' 1.47 -4.4265'
            planeId.setAttribute('scale', '1.63 1.94 0.00001')
            planeId.setAttribute('position', artworks[i].x + ' ' + artworks[i].y + ' ' + artworks[i].z)
            planeId.setAttribute('rotation', artworks[i].r1 + ' ' + artworks[i].r2 + ' ' + artworks[i].r3)
            sceneEl.appendChild(planeId);
            // // Info plane
            // var infoPlane = document.createElement('a-plane')
            // infoPlane.setAttribute('id', artworks[i].id);
            // infoPlane.setAttribute('class', 'generatedartwork');
            // infoPlane.setAttribute('rotation', artworks[i].r1 + ' ' + artworks[i].r2 + ' ' + artworks[i].r3)
            // infoPlane.setAttribute('position', artworks[i].x + ' ' + '2.249' + ' ' + artworks[i].z)
            // infoPlane.setAttribute('scale', "1.63 1.94 0.00001")
            // sceneEl.appendChild(infoPlane);
            // Title
            var infoText = document.createElement('a-text');
            infoText.setAttribute('id', artworks[i].id);
            infoText.setAttribute('position', artworks[i].titlex + ' ' + artworks[i].titley + ' ' + artworks[i].titlez)
            infoText.setAttribute('rotation', artworks[i].r1 + ' ' + artworks[i].r2 + ' ' + '0')
            infoText.setAttribute('scale', artworks[i].titles1 + ' ' + artworks[i].titles2 + ' ' + artworks[i].titles3)
            infoText.setAttribute('material', 'color: black;')
            infoText.setAttribute('text', 'anchor:  align;  align: center; width:  5;  value:' + artworks[i].title + ' by ' + artworks[i].author)
            sceneEl.appendChild(infoText);
            // var infoText = document.createElement('a-text');
            // infoText.setAttribute('id', artworks[i].id);
            // infoText.setAttribute('position', artworks[i].titlex + ' ' + artworks[i].likey + ' ' + artworks[i].titlez)
            // infoText.setAttribute('rotation', artworks[i].r1 + ' ' + artworks[i].r2 + ' ' + '0')
            // infoText.setAttribute('scale', artworks[i].titles1 + ' ' + artworks[i].titles2 + ' ' + artworks[i].titles3)
            // infoText.setAttribute('material', 'color: black;')
            // infoText.setAttribute('artwork', 'id:' + artworks[i].id + '; arraypos:' + artworks[i].location - 1)
            // infoText.setAttribute('text', 'anchor:  align;  align: center; width:  5;  value: Likes: ' + artworks[i].likes)
            // sceneEl.appendChild(infoText);
            // AFRAME.registerComponent('artwork', {
            //     schema: {
            //         id: { default: 'default' },
            //         arraypos: { type: 'int', default: 'default' }
            //     },
            //     init: function() {
            //         var data = this.data
            //         var arrayloc = data.arraypos;
            //         console.log(data.id)
            //         var el = this.el;
            //         el.addEventListener('click', function() {
            //             let k = data.arraypos
            //             let newlikeval = artworks[k].likes + 1
            //             console.log(data.id);
            //             // el.setAttribute('artwork', 'id:' + data.id + '; likes:' + newLikes)
            //             console.log(newlikeval)
            //             fb.like(data.id, newlikeval)
            //         });
            //     }
            // });
            // // Author
            // var infoText_author = document.createElement('a-text');
            // infoText_author.setAttribute('id', artworks[i].id);
            // infoText_author.setAttribute('position', artworks[i].x + ' ' + '2.268' + ' ' + artworks[i].z)
            // infoText_author.setAttribute('rotation', artworks[i].r1 + ' ' + artworks[i].r2 + ' ' + '180')
            // infoText_author.setAttribute('scale', '0.610 0.610 1')
            // infoText_author.setAttribute('material', 'color: black;')
            // infoText_author.setAttribute('text', 'anchor:  align;  align: center; width:  5;  value:' + artworks[i].author)
            // sceneEl.appendChild(infoText_author);
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

// locate elements inside dom :D

// $('#paintings > a-entity').map(function() {
//     console.log(this.id);
//     let relv = this.id;
//     $(relv + ' > a-plane').map(function() {
//         console.log(this);
//     });
//     $(relv + ' > a-text').map(function() {
//         console.log(this);
//     });
// });
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