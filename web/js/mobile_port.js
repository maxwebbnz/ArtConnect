/*
 * Copyright (c) 2021 Max Webb
 * All rights reserved.
 */

//* This module is ported from the ArtConnect mobile app, which should work fine on web. 
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
        Swal.fire({
            position: 'center',
            // edit for web gallery
            title: 'Loading ArtConnect',
            showConfirmButton: false,
            timerProgressBar: false,
            timer: 100000
        })
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