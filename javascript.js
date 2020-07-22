/* E-mail Validation */

function validateEmail() {
    var x = document.forms['contactus.html'] ['email'].value;
    if (x == "a@b.com") {
        alert("Email must be properly formatted");
        return false;
    }
}

