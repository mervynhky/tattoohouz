//BACK-TO-TOP
$('body').prepend('<a href="#" class="back-to-top"></a>');

var amountScrolled = 300;

$(window).scroll(function() {
    if ( $(window).scrollTop() > amountScrolled ) {
        $('a.back-to-top').fadeIn('slow');
    } else {
        $('a.back-to-top').fadeOut('slow');
    }
});

$('a.back-to-top').click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 700);
    return false;
});

//BUTTONS: INDEX PAGE

function homePage(){
    window.open('index.html', '_self');
}

function aboutPage(){
    window.open('pages/about.html', '_self');
}

function galleryPage(){
    window.open('pages/gallery.html', '_self');
}

function contactPage(){
    window.open('pages/contact.html', '_self');
}

//BUTTONS: INSIDE PAGES
function homePage1(){
    window.open('../index.html', '_self');
}

function aboutPage1(){
    window.open('about.html', '_self');
}

function galleryPage1(){
    window.open('gallery.html', '_self');
}

function contactPage1(){
    window.open('contact.html', '_self');
}

//DISABLE RIGHT CLICK
window.oncontextmenu = function () {
    alert("Right click disabled!");
    return false;
}

//CONTACT FORM VALIDATION
function validateForm() {

    if (nameValidation() == false || nameValidation() == null && emailValidation() == false || emailValidation() == null){
        return false;
    } else {
        return true;
    }
}

function nameValidation() {
    var nameForm = document.getElementById('form-name');
    var name = nameForm.value;
    if (name != ""){
        nameForm.style.borderColor = "#2ecc71";
        return true;
    } else {
        alert("Name is empty!");
        nameForm.style.borderColor = "#c0392b";
        return false;
    }
}

function emailValidation() {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var emailForm = document.getElementById('form-email');
    var emailAddress = emailForm.value;
    if (regex.test(emailAddress)) {
        emailForm.style.borderColor = "#2ecc71";
    } else {
        alert("E-mail is not valid!");
        emailForm.style.borderColor = "#c0392b";
        return false;
    }
}