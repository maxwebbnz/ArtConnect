/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */
/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
var firebaseConfig = {
    apiKey: "AIzaSyBDX8i-zyw4lRzXwTchnzIBNMyd8vJfwxM",
    authDomain: "dtec-artconnect.firebaseapp.com",
    projectId: "dtec-artconnect",
    storageBucket: "dtec-artconnect.appspot.com",
    messagingSenderId: "316146994859",
    appId: "1:316146994859:web:dda34713c7ce03124d31ee"
};

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // console.log(navigator.camera);
    // console.log(cordova.file);
    // document.getElementById("captureImage").addEventListener("click", captureImage);
    firebase.initializeApp(firebaseConfig);
    window.open = cordova.InAppBrowser.open;
    console.log('device ready')

}