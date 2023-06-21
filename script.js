// Toggle Menu - Show or Hide
var navLinks = document.getElementById('navLinks');

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}


// Email Function
function sendEmail() {
    Email.send({
        SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
        // Generate Secure Token at Elastic Mail site
        // Host : "smtp.elasticemail.com",
        // Username : "username",
        // Password : "password",
        To : 'them@website.com',
        From : document.getElementById('email').value,
        Subject : "Inquiry",
        Body : "Name: " + document.getElementById('name').value 
            + "<br> Email: " + document.getElementById('email').value 
            + "<br> Phone #: " + document.getElementById('phone').value 
            + "<br> Message: " + document.getElementById('message').value
    }).then(
      message => alert("Message was sent")
    );
}