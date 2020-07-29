/* E-mail Validation */

function validateForm() {
    var x = document.forms['contactForm']['email'].value;
    if (x == "") {
        alert("Email must be filled out.");
        document.getElementById('email').focus;
        return false;
    }
}


