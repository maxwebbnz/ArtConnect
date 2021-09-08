/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */
// function setOptions(srcType) {
//     var options = {
//         // Some common settings are 20, 50, and 100
//         quality: 50,
//         destinationType: Camera.DestinationType.FILE_URI,
//         // In this app, dynamically set the picture source, Camera or photo gallery
//         sourceType: srcType,
//         encodingType: Camera.EncodingType.JPEG,
//         mediaType: Camera.MediaType.PICTURE,
//         allowEdit: true,
//         correctOrientation: true
//     }
//     return options;
// }

// function openCamera(selection) {

//     var srcType = Camera.PictureSourceType.CAMERA;
//     var options = setOptions(srcType);
//     var func = createNewFileEntry;

//     navigator.camera.getPicture(function cameraSuccess(imageUri) {

//         displayImage(imageUri);
//         // You may choose to copy the picture, save it somewhere, or upload.
//         func(imageUri);

//     }, function cameraError(error) {
//         console.debug("Unable to obtain picture: " + error, "app");

//     }, options);
// }

// function displayImage(imgUri) {

//     var elem = document.getElementById('imageFile');
//     elem.src = imgUri;
// }


// thanks for youtube :D

let app = {
    init: function() {
        document.getElementById('btn').addEventListener('click', app.takephoto);
    },
    takephoto: function() {
        let opts = {
            quality: 80,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            mediaType: Camera.MediaType.PICTURE,
            encodingType: Camera.EncodingType.JPEG,
            cameraDirection: Camera.Direction.BACK,
            targetWidth: 300,
            targetHeight: 400
        };

        navigator.camera.getPicture(app.ftw, app.wtf, opts);
    },
    ftw: function(imgURI) {
        alert(imgURI)

    },
    wtf: function(msg) {
        console.log('hi')
    }
};

document.addEventListener('deviceready', app.init);


function captureImage() {

    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        targetWidth: 200,
        targetHeight: 200,
        allowEdit: false,
        saveToPhotoAlbum: true,
        encodingType: Camera.EncodingType.JPEG,
        destinationType: Camera.DestinationType.DATA_URL
            //destinationType: Camera.DestinationType.FILE_URL
    });

    function onSuccess(imageData) {
        // var image = document.getElementById('myImage');
        // image.src = "data:image/jpeg;base64," + imageData;
        //console.log(image.src);
        console.log(imageData);
        alert(imageData);

    }

    function onFail(message) {
        alert('Failed because: ' + message);
        console.log(message);
    }

}